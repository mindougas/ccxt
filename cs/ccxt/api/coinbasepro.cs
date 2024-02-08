// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

namespace ccxt;

public partial class coinbasepro : Exchange
{
    public coinbasepro (object args = null): base(args) {}

    public async Task<object> publicGetCurrencies (object parameters = null)
    {
        return await this.callAsync ("publicGetCurrencies",parameters);
    }

    public async Task<object> publicGetProducts (object parameters = null)
    {
        return await this.callAsync ("publicGetProducts",parameters);
    }

    public async Task<object> publicGetProductsId (object parameters = null)
    {
        return await this.callAsync ("publicGetProductsId",parameters);
    }

    public async Task<object> publicGetProductsIdBook (object parameters = null)
    {
        return await this.callAsync ("publicGetProductsIdBook",parameters);
    }

    public async Task<object> publicGetProductsIdCandles (object parameters = null)
    {
        return await this.callAsync ("publicGetProductsIdCandles",parameters);
    }

    public async Task<object> publicGetProductsIdStats (object parameters = null)
    {
        return await this.callAsync ("publicGetProductsIdStats",parameters);
    }

    public async Task<object> publicGetProductsIdTicker (object parameters = null)
    {
        return await this.callAsync ("publicGetProductsIdTicker",parameters);
    }

    public async Task<object> publicGetProductsIdTrades (object parameters = null)
    {
        return await this.callAsync ("publicGetProductsIdTrades",parameters);
    }

    public async Task<object> publicGetTime (object parameters = null)
    {
        return await this.callAsync ("publicGetTime",parameters);
    }

    public async Task<object> publicGetProductsSparkLines (object parameters = null)
    {
        return await this.callAsync ("publicGetProductsSparkLines",parameters);
    }

    public async Task<object> privateGetAddressBook (object parameters = null)
    {
        return await this.callAsync ("privateGetAddressBook",parameters);
    }

    public async Task<object> privateGetAccounts (object parameters = null)
    {
        return await this.callAsync ("privateGetAccounts",parameters);
    }

    public async Task<object> privateGetAccountsId (object parameters = null)
    {
        return await this.callAsync ("privateGetAccountsId",parameters);
    }

    public async Task<object> privateGetAccountsIdHolds (object parameters = null)
    {
        return await this.callAsync ("privateGetAccountsIdHolds",parameters);
    }

    public async Task<object> privateGetAccountsIdLedger (object parameters = null)
    {
        return await this.callAsync ("privateGetAccountsIdLedger",parameters);
    }

    public async Task<object> privateGetAccountsIdTransfers (object parameters = null)
    {
        return await this.callAsync ("privateGetAccountsIdTransfers",parameters);
    }

    public async Task<object> privateGetCoinbaseAccounts (object parameters = null)
    {
        return await this.callAsync ("privateGetCoinbaseAccounts",parameters);
    }

    public async Task<object> privateGetFills (object parameters = null)
    {
        return await this.callAsync ("privateGetFills",parameters);
    }

    public async Task<object> privateGetFunding (object parameters = null)
    {
        return await this.callAsync ("privateGetFunding",parameters);
    }

    public async Task<object> privateGetFees (object parameters = null)
    {
        return await this.callAsync ("privateGetFees",parameters);
    }

    public async Task<object> privateGetMarginProfileInformation (object parameters = null)
    {
        return await this.callAsync ("privateGetMarginProfileInformation",parameters);
    }

    public async Task<object> privateGetMarginBuyingPower (object parameters = null)
    {
        return await this.callAsync ("privateGetMarginBuyingPower",parameters);
    }

    public async Task<object> privateGetMarginWithdrawalPower (object parameters = null)
    {
        return await this.callAsync ("privateGetMarginWithdrawalPower",parameters);
    }

    public async Task<object> privateGetMarginWithdrawalPowerAll (object parameters = null)
    {
        return await this.callAsync ("privateGetMarginWithdrawalPowerAll",parameters);
    }

    public async Task<object> privateGetMarginExitPlan (object parameters = null)
    {
        return await this.callAsync ("privateGetMarginExitPlan",parameters);
    }

    public async Task<object> privateGetMarginLiquidationHistory (object parameters = null)
    {
        return await this.callAsync ("privateGetMarginLiquidationHistory",parameters);
    }

    public async Task<object> privateGetMarginPositionRefreshAmounts (object parameters = null)
    {
        return await this.callAsync ("privateGetMarginPositionRefreshAmounts",parameters);
    }

    public async Task<object> privateGetMarginStatus (object parameters = null)
    {
        return await this.callAsync ("privateGetMarginStatus",parameters);
    }

    public async Task<object> privateGetOracle (object parameters = null)
    {
        return await this.callAsync ("privateGetOracle",parameters);
    }

    public async Task<object> privateGetOrders (object parameters = null)
    {
        return await this.callAsync ("privateGetOrders",parameters);
    }

    public async Task<object> privateGetOrdersId (object parameters = null)
    {
        return await this.callAsync ("privateGetOrdersId",parameters);
    }

    public async Task<object> privateGetOrdersClientClientOid (object parameters = null)
    {
        return await this.callAsync ("privateGetOrdersClientClientOid",parameters);
    }

    public async Task<object> privateGetOtcOrders (object parameters = null)
    {
        return await this.callAsync ("privateGetOtcOrders",parameters);
    }

    public async Task<object> privateGetPaymentMethods (object parameters = null)
    {
        return await this.callAsync ("privateGetPaymentMethods",parameters);
    }

    public async Task<object> privateGetPosition (object parameters = null)
    {
        return await this.callAsync ("privateGetPosition",parameters);
    }

    public async Task<object> privateGetProfiles (object parameters = null)
    {
        return await this.callAsync ("privateGetProfiles",parameters);
    }

    public async Task<object> privateGetProfilesId (object parameters = null)
    {
        return await this.callAsync ("privateGetProfilesId",parameters);
    }

    public async Task<object> privateGetReportsReportId (object parameters = null)
    {
        return await this.callAsync ("privateGetReportsReportId",parameters);
    }

    public async Task<object> privateGetTransfers (object parameters = null)
    {
        return await this.callAsync ("privateGetTransfers",parameters);
    }

    public async Task<object> privateGetTransfersTransferId (object parameters = null)
    {
        return await this.callAsync ("privateGetTransfersTransferId",parameters);
    }

    public async Task<object> privateGetUsersSelfExchangeLimits (object parameters = null)
    {
        return await this.callAsync ("privateGetUsersSelfExchangeLimits",parameters);
    }

    public async Task<object> privateGetUsersSelfHoldBalances (object parameters = null)
    {
        return await this.callAsync ("privateGetUsersSelfHoldBalances",parameters);
    }

    public async Task<object> privateGetUsersSelfTrailingVolume (object parameters = null)
    {
        return await this.callAsync ("privateGetUsersSelfTrailingVolume",parameters);
    }

    public async Task<object> privateGetWithdrawalsFeeEstimate (object parameters = null)
    {
        return await this.callAsync ("privateGetWithdrawalsFeeEstimate",parameters);
    }

    public async Task<object> privateGetConversionsConversionId (object parameters = null)
    {
        return await this.callAsync ("privateGetConversionsConversionId",parameters);
    }

    public async Task<object> privateGetConversionsFees (object parameters = null)
    {
        return await this.callAsync ("privateGetConversionsFees",parameters);
    }

    public async Task<object> privatePostConversions (object parameters = null)
    {
        return await this.callAsync ("privatePostConversions",parameters);
    }

    public async Task<object> privatePostDepositsCoinbaseAccount (object parameters = null)
    {
        return await this.callAsync ("privatePostDepositsCoinbaseAccount",parameters);
    }

    public async Task<object> privatePostDepositsPaymentMethod (object parameters = null)
    {
        return await this.callAsync ("privatePostDepositsPaymentMethod",parameters);
    }

    public async Task<object> privatePostCoinbaseAccountsIdAddresses (object parameters = null)
    {
        return await this.callAsync ("privatePostCoinbaseAccountsIdAddresses",parameters);
    }

    public async Task<object> privatePostFundingRepay (object parameters = null)
    {
        return await this.callAsync ("privatePostFundingRepay",parameters);
    }

    public async Task<object> privatePostOrders (object parameters = null)
    {
        return await this.callAsync ("privatePostOrders",parameters);
    }

    public async Task<object> privatePostPositionClose (object parameters = null)
    {
        return await this.callAsync ("privatePostPositionClose",parameters);
    }

    public async Task<object> privatePostProfilesMarginTransfer (object parameters = null)
    {
        return await this.callAsync ("privatePostProfilesMarginTransfer",parameters);
    }

    public async Task<object> privatePostProfilesTransfer (object parameters = null)
    {
        return await this.callAsync ("privatePostProfilesTransfer",parameters);
    }

    public async Task<object> privatePostReports (object parameters = null)
    {
        return await this.callAsync ("privatePostReports",parameters);
    }

    public async Task<object> privatePostWithdrawalsCoinbase (object parameters = null)
    {
        return await this.callAsync ("privatePostWithdrawalsCoinbase",parameters);
    }

    public async Task<object> privatePostWithdrawalsCoinbaseAccount (object parameters = null)
    {
        return await this.callAsync ("privatePostWithdrawalsCoinbaseAccount",parameters);
    }

    public async Task<object> privatePostWithdrawalsCrypto (object parameters = null)
    {
        return await this.callAsync ("privatePostWithdrawalsCrypto",parameters);
    }

    public async Task<object> privatePostWithdrawalsPaymentMethod (object parameters = null)
    {
        return await this.callAsync ("privatePostWithdrawalsPaymentMethod",parameters);
    }

    public async Task<object> privateDeleteOrders (object parameters = null)
    {
        return await this.callAsync ("privateDeleteOrders",parameters);
    }

    public async Task<object> privateDeleteOrdersClientClientOid (object parameters = null)
    {
        return await this.callAsync ("privateDeleteOrdersClientClientOid",parameters);
    }

    public async Task<object> privateDeleteOrdersId (object parameters = null)
    {
        return await this.callAsync ("privateDeleteOrdersId",parameters);
    }

}