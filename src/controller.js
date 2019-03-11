const CampaignModel = require('./model')
const adsSdk = require('facebook-nodejs-business-sdk')
const accessToken = process.env.ACCESS_TOKEN
adsSdk.FacebookAdsApi.init(accessToken)

const AdAccount = adsSdk.AdAccount
const Campaign = adsSdk.Campaign
const account = new AdAccount(`act_${process.env.AD_ACCOUNT_ID}`)

module.exports = {
  createCampaign: async (name, type) => {
    let campaignResult
    try {
      campaignResult = await account.createCampaign([], {
        [Campaign.Fields.name]: name,
        [Campaign.Fields.objective]: type
      })
    } catch (err) {
      return err
    }

    let campaign = new CampaignModel({ campaignId: campaignResult._data.id })
    return campaign.save()
  },

  deleteAll: async () => {
    const campaigns = await CampaignModel.find()
    let fbPromises = campaigns.map(cam => new Campaign(cam.campaignId).delete())
    let mgPromises = campaigns.map(cam => cam.remove())
    try {
      await Promise.all(fbPromises.concat(mgPromises))
      return { success: true }
    } catch (err) {
      return err
    }
  }
}
