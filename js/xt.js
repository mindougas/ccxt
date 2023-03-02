'use strict';

//  ---------------------------------------------------------------------------

const Exchange = require ('./base/Exchange');
const { TICK_SIZE } = require ('./base/functions/number');
const Precise = require ('./base/Precise');
const { ExchangeError } = require ('./base/errors');
// ^^^ BadSymbol, BadRequest, OnMaintenance, InvalidOrder, ArgumentsRequired AccountSuspended, PermissionDenied, RateLimitExceeded, ExchangeNotAvailable, OrderNotFound, InsufficientFunds, AuthenticationError

//  ---------------------------------------------------------------------------

module.exports = class xt extends Exchange {
    describe () {
        return this.deepExtend (super.describe (), {
            'id': 'xt',
            'name': 'XT',
            'countries': [ 'SC' ], // Seychelles
            // 10 requests per second => 1000ms / 10 = 100 (All other)
            // 3 requests per second => 1000ms / 3 = 333.333 (get assets -> fetchMarkets & fetchCurrencies)
            // 1000 times per minute for each single IP -> Otherwise account locked for 10min
            'rateLimit': 100, // TODO: Is rate limit right? https://doc.xt.com/#documentationlimitRules
            'version': '1',
            'pro': false,
            'has': {
                'CORS': false,
                'spot': true,
                'margin': false,
                'swap': true,
                'future': true,
                'option': undefined,
                'fetchCurrencies': true,
                'fetchMarkets': true,
                'fetchOHLCV': true,
                'fetchTicker': true,
                'fetchTickers': true,
                'fetchOrderBook': true,
                'fetchTrades': true,
            },
            'precisionMode': TICK_SIZE,
            'urls': {
                'logo': '', // TODO: Add logo
                'api': {
                    'spot': {
                        'public': 'https://api.xt.com',
                        'private': 'https://api.xt.com',
                    },
                    'spot2': {
                        'public': 'https://api.xt.pub',
                        'private': 'https://api.xt.pub',
                    },
                    'usdt': {
                        'public': 'https://fapi.xt.com',
                        'private': 'https://fapi.xt.com',
                    },
                    'coin': {
                        'public': 'https://dapi.xt.com',
                        'private': 'https://dapi.xt.com',
                    },
                },
                'www': 'https://xt.com',
                'referral': '', // TODO: Add referral
                'doc': [
                    'https://doc.xt.com/',
                    'https://github.com/xtpub/api-doc',
                ],
                'fees': [
                ],
            },
            'api': {
                'spot': {
                    'get': {
                        'data/api/v1/getCoinConfig': 333.33,
                        'data/api/v1/getMarketConfig': 333.33,
                        'data/api/v1/getKLine': 100,
                        'data/api/v1/getTicker': 100,
                        'data/api/v1/getTickers': 100,
                        'data/api/v1/getDepth': 100,
                        'data/api/v1/getTrades': 100,
                        'trade/api/v1/getServerTime': 100,
                        'data/getCoinConfig': 333.33,
                        'data/getMarketConfig': 333.33,
                        'data/getKLine': 100,
                        'data/getTicker': 100,
                        'data/getDepth': 100,
                        'data/getTrades': 100,
                        'trade/getServerTime': 100,
                        'trade/api/v1/getBalance': 100,
                        'trade/api/v1/getAccounts': 100,
                        'trade/api/v1/getFunds': 100,
                        'trade/api/v1/getOrder': 100,
                        'trade/api/v1/getOpenOrders': 100,
                        'trade/api/v1/getBatchOrders': 100,
                        'trade/api/v1/myTrades': 100,
                    },
                    'post': {
                        'trade/api/v1/order': 100,
                        'trade/api/v1/batchOrder': 100,
                    },
                    'delete': {
                        'trade/api/v1/cancel': 100,
                        'trade/api/v1/batchCancel': 100,
                    },
                },
                'usdt': {
                    'get': {
                        'future/market/v1/public/symbol/coins': 333.33,
                        'future/market/v1/public/symbol/detail': 333.33,
                        'future/market/v1/public/symbol/list': 100,
                        'future/market/v1/public/leverage/bracket/detail': 100,
                        'future/market/v1/public/leverage/bracket/list': 100,
                        'future/market/v1/public/q/ticker': 100,
                        'future/market/v1/public/q/tickers': 100,
                        'future/market/v1/public/q/deal': 100,
                        'future/market/v1/public/q/depth': 100,
                        'future/market/v1/public/q/symbol-index-price': 100,
                        'future/market/v1/public/q/index-price': 100,
                        'future/market/v1/public/q/symbol-mark-price': 100,
                        'future/market/v1/public/q/mark-price': 100,
                        'future/market/v1/public/q/kline': 100,
                        'future/market/v1/public/q/agg-ticker': 100,
                        'future/market/v1/public/q/agg-tickers': 100,
                        'future/market/v1/public/q/funding-rate': 100,
                        'future/market/v1/public/q/funding-rate-record': 100,
                        'future/market/v1/public/contract/risk-balance': 100,
                        'future/market/v1/public/contract/open-interest': 100,
                    },
                    // TODO: Add private methods
                },
                'coin': {
                    'get': {
                        'future/market/v1/public/symbol/coins': 333.33,
                        'future/market/v1/public/symbol/detail': 333.33,
                        'future/market/v1/public/symbol/list': 100,
                        'future/market/v1/public/leverage/bracket/detail': 100,
                        'future/market/v1/public/leverage/bracket/list': 100,
                        'future/market/v1/public/q/ticker': 100,
                        'future/market/v1/public/q/tickers': 100,
                        'future/market/v1/public/q/deal': 100,
                        'future/market/v1/public/q/depth': 100,
                        'future/market/v1/public/q/symbol-index-price': 100,
                        'future/market/v1/public/q/index-price': 100,
                        'future/market/v1/public/q/symbol-mark-price': 100,
                        'future/market/v1/public/q/mark-price': 100,
                        'future/market/v1/public/q/kline': 100,
                        'future/market/v1/public/q/agg-ticker': 100,
                        'future/market/v1/public/q/agg-tickers': 100,
                        'future/market/v1/public/q/funding-rate': 100,
                        'future/market/v1/public/q/funding-rate-record': 100,
                        'future/market/v1/public/contract/risk-balance': 100,
                        'future/market/v1/public/contract/open-interest': 100,
                    },
                    // TODO: Add private methods
                },
            },
            'fees': {
                'trading': {
                },
                'tierBased': true,
                'percentage': true,
                'taker': this.parseNumber ('0.002'),
                'maker': this.parseNumber ('0.002'),
                'tiers': {
                    'maker': [
                        [ this.parseNumber ('0'), this.parseNumber ('0.002') ],
                        [ this.parseNumber ('5000'), this.parseNumber ('0.0018') ],
                        [ this.parseNumber ('10000'), this.parseNumber ('0.0016') ],
                        [ this.parseNumber ('20000'), this.parseNumber ('0.0014') ],
                        [ this.parseNumber ('50000'), this.parseNumber ('0.0012') ],
                        [ this.parseNumber ('150000'), this.parseNumber ('0.0010') ],
                        [ this.parseNumber ('300000'), this.parseNumber ('0.0008') ],
                        [ this.parseNumber ('600000'), this.parseNumber ('0.0007') ],
                        [ this.parseNumber ('1200000'), this.parseNumber ('0.0006') ],
                        [ this.parseNumber ('2500000'), this.parseNumber ('0.0005') ],
                        [ this.parseNumber ('6000000'), this.parseNumber ('0.0004') ],
                        [ this.parseNumber ('15000000'), this.parseNumber ('0.0003') ],
                        [ this.parseNumber ('30000000'), this.parseNumber ('0.0002') ],
                    ],
                    'taker': [
                        [ this.parseNumber ('0'), this.parseNumber ('0.002') ],
                        [ this.parseNumber ('5000'), this.parseNumber ('0.0018') ],
                        [ this.parseNumber ('10000'), this.parseNumber ('0.0016') ],
                        [ this.parseNumber ('20000'), this.parseNumber ('0.0014') ],
                        [ this.parseNumber ('50000'), this.parseNumber ('0.0012') ],
                        [ this.parseNumber ('150000'), this.parseNumber ('0.0010') ],
                        [ this.parseNumber ('300000'), this.parseNumber ('0.0008') ],
                        [ this.parseNumber ('600000'), this.parseNumber ('0.0007') ],
                        [ this.parseNumber ('1200000'), this.parseNumber ('0.0006') ],
                        [ this.parseNumber ('2500000'), this.parseNumber ('0.0005') ],
                        [ this.parseNumber ('6000000'), this.parseNumber ('0.0004') ],
                        [ this.parseNumber ('15000000'), this.parseNumber ('0.0003') ],
                        [ this.parseNumber ('30000000'), this.parseNumber ('0.0002') ],
                    ],
                },
            },
            'timeframes': {
                '1m': '1m', // spot, swap
                '5m': '5m', // spot, swap
                '15m': '15m', // spot, swap
                '30m': '30m', // spot, swap
                '1h': '1h', // spot, swap
                '4h': '4h', // swap
                '6h': '6h', // spot
                '1d': '1d', // spot, swap
                '1w': '1w', // spot, swap
                '1M': '1M', // spot
            },
            'exceptions': {
                'exact': { // TODO: Error codes
                },
                'broad': {},
            },
            'options': { // TODO: options
                'networks': {
                },
                'accountsByType': {
                },
                'timeframes': {
                    'spot': {
                        '1m': '1min',
                        '5m': '5min',
                        '15m': '15min',
                        '30m': '30min',
                        '1h': '1hour',
                        '6h': '6hour',
                        '1d': '1day',
                        '1w': '7day',
                        '1M': '30day',
                    },
                    'swap': {
                        '1m': '1m',
                        '5m': '5m',
                        '15m': '15m',
                        '30m': '30m',
                        '1h': '1h',
                        '4h': '4h',
                        '1d': '1day',
                        '1w': '7day',
                    },
                },
            },
            'commonCurrencies': { // TODO: commonCurrencies
            },
        });
    }

    nonce () {
        return this.milliseconds ();
    }

    async fetchCurrencies (params = {}) {
        /**
         * @method
         * @name xt#fetchCurrencies
         * @description fetches all available currencies on an exchange
         * @param {object} params extra parameters specific to the xt api endpoint
         * @returns {object} an associative dictionary of currencies
         */
        const response = await this.spotGetDataApiV1GetCoinConfig (params);
        const result = {};
        for (let i = 0; i < response.length; i++) {
            const entry = response[i];
            const currencyId = this.safeString (entry, 'name');
            const code = this.safeCurrencyCode (currencyId);
            const name = this.safeString (entry, 'fullName');
            const rawNetworks = this.safeValue (entry, 'chains', []);
            const networks = {};
            let depositEnabled = undefined;
            let withdrawEnabled = undefined;
            for (let j = 0; j < rawNetworks.length; j++) {
                const rawNetwork = rawNetworks[j];
                const networkId = this.safeString (rawNetwork, 'name');
                const network = this.safeNetwork (networkId);
                const depositRaw = this.safeString (rawNetwork, 'deposit');
                let deposit = false;
                if (depositRaw === 1) {
                    deposit = true;
                    depositEnabled = true;
                }
                const withdrawRaw = this.safeString (rawNetwork, 'withdraw');
                let withdraw = false;
                if (withdrawRaw === 1) {
                    withdraw = true;
                    withdrawEnabled = true;
                }
                networks[network] = {
                    'info': rawNetwork,
                    'id': networkId,
                    'network': network,
                    'fee': undefined,
                    'deposit': deposit,
                    'withdraw': withdraw,
                    'limits': {
                        'withdraw': {
                            'min': undefined,
                            'max': undefined,
                        },
                        'deposit': {
                            'min': undefined,
                            'max': undefined,
                        },
                    },
                };
            }
            result[code] = {
                'info': entry,
                'code': code,
                'id': currencyId,
                'precision': undefined,
                'name': name,
                'active': true,
                'deposit': depositEnabled,
                'withdraw': withdrawEnabled,
                'networks': networks,
                'fee': undefined,
                'limits': {
                    'amount': {
                        'min': undefined,
                        'max': undefined,
                    },
                },
            };
        }
        return result;
    }

    safeNetwork (networkId) {
        if (networkId === undefined) {
            return undefined;
        } else {
            return networkId.toLowerCase ();
        }
    }

    async fetchMarkets (params = {}) {
        /**
         * @method
         * @name xt#fetchMarkets
         * @description retrieves data on all markets for xt
         * @param {object} params extra parameters specific to the exchange api endpoint
         * @returns {[object]} an array of objects representing market data
         */
        let type = undefined;
        [ type, params ] = this.handleMarketTypeAndParams ('fetchMarkets', undefined, params);
        const query = this.omit (params, 'type');
        if (type === 'spot') {
            // spot and swap ids are equal
            // so they can't be loaded together
            const spotMarkets = await this.fetchSpotMarkets (query);
            return spotMarkets;
        }
        return this.fetchSwapAndFutureMarkets (query);
    }

    async fetchSpotMarkets (params = {}) {
        const response = await this.spotGetDataApiV1GetMarketConfig (params);
        //
        //    {
        //      "raca_xt":
        //      {
        //      "minAmount": 1,
        //      "pricePoint": 7,
        //      "coinPoint": 0,
        //      "maker": 0.002,
        //      "minMoney": 0,
        //      "taker": 0.002
        //      }
        //    }
        //
        const result = [];
        const ids = Object.keys (response);
        for (let i = 0; i < ids.length; i++) {
            const id = ids[i];
            const market = this.safeValue (response, id);
            const splitId = id.split ('_');
            const baseId = this.safeString (splitId, 0);
            const quoteId = this.safeString (splitId, 1);
            const base = this.safeCurrencyCode (baseId);
            const quote = this.safeCurrencyCode (quoteId);
            const pricePoint = this.safeNumber (market, 'pricePoint');
            const coinPoint = this.safeNumber (market, 'coinPoint');
            const minAmount = this.safeNumber (market, 'minAmount');
            const minMoney = this.safeNumber (market, 'minMoney');
            const symbol = base + '/' + quote;
            result.push ({
                'id': id,
                'symbol': symbol,
                'base': base,
                'quote': quote,
                'settle': undefined,
                'baseId': baseId,
                'quoteId': quoteId,
                'settleId': quoteId,
                'type': 'spot',
                'spot': true,
                'margin': false,
                'swap': false,
                'future': false,
                'option': false,
                'active': true,
                'contract': false,
                'linear': undefined,
                'inverse': undefined,
                'taker': this.safeNumber (market, 'taker'),
                'maker': this.safeNumber (market, 'maker'),
                'contractSize': undefined,
                'expiry': undefined,
                'expiryDatetime': undefined,
                'strike': undefined,
                'optionType': undefined,
                'feeCurrency': quote,
                // TODO: Precision
                'precision': {
                    'amount': coinPoint,
                    'price': pricePoint,
                },
                'limits': {
                    'amount': {
                        'min': minAmount,
                        'max': undefined,
                    },
                    'price': {
                        'min': undefined,
                        'max': undefined,
                    },
                    'cost': {
                        'min': minMoney,
                        'max': undefined,
                    },
                },
                'info': market,
            });
        }
        return result;
    }

    async fetchSwapAndFutureMarkets (params = {}) {
        const markets = await Promise.all ([ this.usdtGetFutureMarketV1PublicSymbolList (params), this.coinGetFutureMarketV1PublicSymbolList (params) ]);
        // USDT
        //
        //    [
        //      {
        //         "symbol": "btc_usdt",
        //         "contractType": "PERPETUAL",
        //         "underlyingType": "U_BASED",
        //         "contractSize": "0.0001",
        //         "tradeSwitch": true,
        //         "state": 0,
        //         "initLeverage": 10,
        //         "initPositionType": "CROSSED",
        //         "baseCoin": "btc",
        //         "quoteCoin": "usdt",
        //         "baseCoinPrecision": 8,
        //         "baseCoinDisplayPrecision": 8,
        //         "quoteCoinPrecision": 8,
        //         "quoteCoinD        let method = 'GetDataApiV1GetMarketConfig';rustType": "TAKE_PROFIT,STOP,TAKE_PROFIT_MARKET,STOP_MARKET,TRAILING_STOP_MARKET",
        //         "supportPositionType": "CROSSED,ISOLATED",
        //         "minPrice": null,
        //         "minQty": "1",
        //         "minNotional": "5",
        //         "maxNotional": "100000",
        //         "multiplierDown": "0.005",
        //         "multiplierUp": "0.005",
        //         "maxOpenOrders": 200,
        //         "maxEntrusts": 120,
        //         "makerFee": "0.00015",
        //         "takerFee": "0.0007",
        //         "liquidationFee": "0.015",
        //         "marketTakeBound": "0.005",
        //         "depthPrecisionMerge": 5,
        //         "labels": [
        //         "HOT"
        //         ],
        //         "onboardDate": 1654857001000,
        //         "enName": "BTCUSDT Perpetual",
        //         "cnName": "BTCUSDT 永续",
        //         "minStepPrice": "0.5"
        //       },
        //    ]
        //
        // COIN
        //
        //  [
        //    {
        //      "symbol": "btc_usd",
        //      "contractType": "PERPETUAL",
        //      "underlyingType": "COIN_BASED",
        //      "contractSize": "100",
        //      "tradeSwitch": true,
        //      "state": 0,
        //      "initLeverage": 10,
        //      "initPositionType": "CROSSED",
        //      "baseCoin": "btc",
        //      "quoteCoin": "usd",
        //      "baseCoinPrecision": 8,
        //      "baseCoinDisplayPrecision": 8,
        //      "quoteCoinPrecision": 8,
        //      "quoteCoinDisplayPrecision": 8,
        //      "quantityPrecision": 0,response
        //      "maxEntrusts": 120,
        //      "makerFee": "0.00015",
        //      "takerFee": "0.0007",
        //      "liquidationFee": "0.015",
        //      "marketTakeBound": "0.005",
        //      "depthPrecisionMerge": 5,
        //      "labels": [
        //      "HOT"
        //      ],
        //      "onboardDate": 1654859400000,
        //      "enName": "BTCUSD Perpetual",
        //      "cnName": "BTCUSD 永续",
        //      "minStepPrice": "0.5"
        //    },
        //  ]
        //
        const swapMarkets = this.arrayConcat (this.safeValue (markets[0], 'result', []), this.safeValue2 (markets[1], 'result', []));
        return this.parseSwapAndFutureMarkets (swapMarkets);
    }

    parseSwapAndFutureMarkets (data) {
        const result = [];
        for (let i = 0; i < data.length; i++) {
            const market = data[i];
            const id = this.safeString (market, 'symbol');
            const baseId = this.safeString (market, 'baseCoin');
            const quoteId = this.safeString (market, 'quoteCoin');
            const base = this.safeCurrencyCode (baseId);
            const quote = this.safeCurrencyCode (quoteId);
            const underlyingType = this.safeString (market, 'underlyingType', '');
            let symbol = base + '/' + quote;
            let linear = undefined;
            let inverse = undefined;
            if (underlyingType === 'U_BASED') {
                symbol += ':' + quote;
                linear = true;
                inverse = false;
            } else if (underlyingType === 'COIN_BASED') {
                symbol += ':' + base;
                linear = false;
                inverse = true;
            }
            const stepString = this.safeString (market, 'pricePrecision');
            const lotString = this.safeString (market, 'quantityPrecision');
            const lot = this.parseNumber (lotString);
            const step = this.parseNumber (stepString);
            const minQtyString = this.safeString (market, 'minQty');
            const minQty = this.parseNumber (minQtyString);
            const contractSizeString = this.safeString (market, 'contractSize');
            const contractSize = this.parseNumber (contractSizeString);
            result.push ({
                'id': id,
                'symbol': symbol,
                'base': base,
                'quote': quote,
                'settle': quote,
                'baseId': baseId,
                'quoteId': quoteId,
                'settleId': quoteId,
                'type': 'swap',
                'spot': false,
                'margin': false,
                'swap': true,
                'future': false,
                'option': false,
                'active': true,
                'contract': true,
                'linear': linear,
                'inverse': inverse,
                'taker': this.safeNumber (market, 'takerFee'),
                'maker': this.safeNumber (market, 'makerFee'),
                'contractSize': contractSize,
                'expiry': undefined,
                'expiryDatetime': undefined,
                'strike': undefined,
                'optionType': undefined,
                'feeCurrency': quote,
                'precision': {
                    'amount': lot,
                    'price': step,
                },
                'limits': {
                    'amount': {
                        'min': minQty,
                        'max': undefined,
                    },
                    'price': {
                        'min': step,
                        'max': undefined,
                    },
                    'cost': {
                        'min': this.parseNumber (Precise.stringMul (lotString, stepString)),
                        'max': undefined,
                    },
                },
                'info': market,
            });
        }
        return result;
    }

    async fetchOHLCV (symbol, timeframe = '1m', since = undefined, limit = undefined, params = {}) {
        /**
         * @method
         * @name xt#fetchOHLCV
         * @description fetches historical candlestick data containing the open, high, low, and close price, and the volume of a market
         * @param {string} symbol unified symbol of the market to fetch OHLCV data for
         * @param {string} timeframe the length of time each candle represents
         * @param {int|undefined} since timestamp in ms of the earliest candle to fetch
         * @param {int|undefined} limit the maximum amount of candles to fetch
         * @param {object} params extra parameters specific to the xt api endpoint
         * @returns {[[int]]} A list of candles ordered as timestamp, open, high, low, close, volume
         */
        await this.loadMarkets ();
        const market = this.market (symbol);
        const options = this.safeValue (this.options, 'timeframes', {});
        const timeframes = this.safeValue (options, market['type'], {});
        const timeframeValue = this.safeString (timeframes, timeframe);
        // spot
        //
        // [
        //    [1664192520, 18821.83, 18822.29, 18815.38, 18817.11, 53.517610, 1007209.60968158]
        // ]
        //
        // swap
        // [
        //     {
        //         "s": "btc_usdt",
        //         "t": 1664192160000,
        //         "o": "18859.50",
        //         "c": "18853.50",
        //         "h": "18865.00",
        //         "l": "18853.50",
        //         "a": "851474",
        //         "v": "1605870.53130"
        //     },
        // ]
        //
        let request = undefined;
        let method = undefined;
        if (market['spot']) {
            request = {
                'market': market['id'],
                'type': timeframeValue,
            };
            if (since !== undefined) {
                request['since'] = this.iso8601 (since);
            }
            method = 'spotGetDataApiV1GetKLine';
        } else if (market['swap']) {
            request = {
                'symbol': market['id'],
                'interval': timeframeValue,
            };
            if (market['linear']) {
                method = 'usdtGetFutureMarketV1PublicQKline';
            } else if (market['inverse']) {
                method = 'coinGetFutureMarketV1PublicQKline';
            }
        }
        const response = await this[method] (this.extend (request, params));
        if (market['spot']) {
            const ohlcvs = this.safeValue (response, 'datas', []);
            for (let i = 0; i < ohlcvs.length; i++) {
                const ohlcv = ohlcvs[i];
                ohlcvs[i][0] = this.safeTimestamp (ohlcv, 0);
            }
            return this.parseOHLCVs (ohlcvs, market, timeframe, since);
        } else if (market['swap']) {
            const ohlcvs = this.safeValue (response, 'result', []);
            return this.parseSwapOhlcv (ohlcvs);
        }
    }

    parseSwapOhlcv (ohlcvs) {
        const results = [];
        for (let i = 0; i < ohlcvs.length; i++) {
            const ohlcv = ohlcvs[i];
            results.push ([
                ohlcv['t'],
                ohlcv['o'],
                ohlcv['h'],
                ohlcv['l'],
                ohlcv['c'],
                ohlcv['a'],
            ]);
        }
        return results;
    }

    async fetchTicker (symbol, params = {}) {
        /**
         * @method
         * @name xt#fetchTicker
         * @description fetches a price ticker, a statistical calculation with the information calculated over the past 24 hours for a specific market
         * @param {string} symbol unified symbol of the market to fetch the ticker for
         * @param {object} params extra parameters specific to the xt api endpoint
         * @returns {object} a [ticker structure]{@link https://docs.ccxt.com/en/latest/manual.html#ticker-structure}
         */
        await this.loadMarkets ();
        const market = this.market (symbol);
        // spot
        //
        // {
        //     "high": 19947.54,
        //     "low": 18155.82,
        //     "rate": -0.0119,
        //     "price": 18879.54,
        //     "moneyVol": 3018816625.5354056,
        //     "coinVol": 159370.590698,
        //     "ask": 18885.67,
        //     "bid": 18879.54,
        //     "askVol": 0.810514,
        //     "bidVol": 41.578905,
        //     "depthTime": 1663860050134
        // }
        //
        // swap
        //
        // {
        //     "high": 19315.95,
        //     "low": 18635.03,
        //     "rate": -0.0142,
        //     "price": 18849.86,
        //     "moneyVol": 3399733871.778236,
        //     "coinVol": 178930.791303,
        //     "ask": 18850.07,
        //     "bid": 18846.76,
        //     "askVol": 0.349282,
        //     "bidVol": 9.356903,
        //     "depthTime": 1664193429432
        // }
        //
        if (market['spot']) {
            const request = {
                'market': market['id'],
            };
            const response = await this.spotGetDataApiV1GetTicker (this.extend (request, params));
            return this.parseTicker (response, market);
        } else if (market['swap']) {
            const request = {
                'symbol': market['id'],
            };
            let method = undefined;
            if (market['linear']) {
                method = 'usdtGetFutureMarketV1PublicQAggTicker';
            } else if (market['inverse']) {
                method = 'coinGetFutureMarketV1PublicQAggTicker';
            }
            const response = await this[method] (this.extend (request, params));
            return this.parseTicker (response, market);
        }
    }

    async fetchTickers (symbols = undefined, params = {}) {
        let type = undefined;
        [ type, params ] = this.handleMarketTypeAndParams ('fetchMarkets', undefined, params);
        const query = this.omit (params, 'type');
        const result = [];
        if (type === 'spot') {
            const responseSpot = await this.spotGetDataApiV1GetTickers (query);
            // spot
            //
            // {
            //     "ltc_usdt": {
            //       "high": 106.99,
            //       "moneyVol": 1589953.528784,
            //       "rate": 4.3400,
            //       "low": 97.51,
            //       "price": 105.52,
            //       "ask": 105.61,
            //       "bid": 105.46,
            //       "coinVol": 15507.7052
            //     }
            // }
            //
            const idsSpot = Object.keys (responseSpot);
            for (let i = 0; i < idsSpot.length; i++) {
                const id = idsSpot[i];
                const market = this.market (id);
                const ticker = this.safeValue (responseSpot, id);
                result.push (this.parseTicker (ticker, market));
            }
            return result;
        }
        const responseUSDT = await this.usdtGetFutureMarketV1PublicQAggTickers (params);
        const responseCOIN = await this.coinGetFutureMarketV1PublicQAggTickers (params);
        // swap
        //
        // [
        //    {
        //    "t": 1664276374733,
        //    "s": "bch_usdt",
        //    "c": "119.14",
        //    "h": "119.99",
        //    "l": "113.82",
        //    "a": "2173861",
        //    "v": "2542448.2328",
        //    "o": "115.87",
        //    "r": "0.0282",
        //    "i": "119.18",
        //    "m": "119.16",
        //    "bp": "119.14",
        //    "ap": "119.2"
        //    }
        // ]
        //
        const tickers = this.arrayConcat (responseUSDT['result'], responseCOIN['result']);
        for (let i = 0; i < tickers.length; i++) {
            const ticker = tickers[i];
            const market = this.market (this.safeString (ticker, 's'));
            result.push (this.parseTicker (ticker, market));
        }
        return result;
    }

    parseTicker (ticker, market) {
        const percentage = this.safeString2 (ticker, 'rate', 'r');
        const marketId = this.safeString2 (ticker, 'symbol', 's');
        market = this.safeMarket (marketId, market, '-');
        const symbol = market['symbol'];
        const timestamp = this.safeNumber2 (ticker, 'depthTime', 't');
        return this.safeTicker ({
            'symbol': symbol,
            'timestamp': timestamp,
            'datetime': this.iso8601 (timestamp),
            'high': this.safeString2 (ticker, 'high', 'h'),
            'low': this.safeString2 (ticker, 'low', 'l'),
            'bid': this.safeString2 (ticker, 'bid', 'bp'),
            'bidVolume': this.safeString (ticker, 'bidVol'),
            'ask': this.safeString2 (ticker, 'ask', 'ap'),
            'askVolume': this.safeString (ticker, 'askVol'),
            'vwap': undefined,
            'open': this.safeString2 (ticker, 'open', 'o'),
            'close': this.safeString2 (ticker, 'price', 'c'),
            'last': this.safeString2 (ticker, 'price', 'c'),
            'previousClose': undefined,
            'change': undefined,
            'percentage': percentage,
            'average': this.safeString (ticker, 'averagePrice'),
            'baseVolume': this.safeString (ticker, 'coinVol'),
            'quoteVolume': this.safeString2 (ticker, 'moneyVol', 'a'),
            'info': ticker,
        }, market);
    }

    async fetchOrderBook (symbol, limit = undefined, params = {}) {
        /**
         * @method
         * @name xt#fetchOrderBook
         * @description fetches information on open orders with bid (buy) and ask (sell) prices, volumes and other data
         * @param {string} symbol unified symbol of the market to fetch the order book for
         * @param {int|undefined} limit the maximum amount of order book entries to return
         * @param {object} params extra parameters specific to the bybit api endpoint
         * @returns {object} A dictionary of [order book structures]{@link https://docs.ccxt.com/en/latest/manual.html#order-book-structure} indexed by market symbols
         */
        await this.loadMarkets ();
        const market = this.market (symbol);
        // spot
        //
        // {
        //     "time": 1663885993088,
        //     "last": "19418.57",
        //     "asks":
        //      19418.57,
        //      0.117057
        //      ],
        //     ],
        //     "bids":
        //     [
        //      [
        //      19413.67,
        //      3.679209
        //      ],
        //     ]
        // }
        //
        // swap
        //
        // "result": {
        //     "t": 1664279607831,
        //     "s": "btc_usdt",
        //     "u": 145028995606381060,
        //     "b": [
        //     [
        //     "20281.5",
        //     "48914"
        //     ],
        //     "a": [
        //     "20281.5",
        //     "48914"
        //     ]
        //     ]
        // }
        //
        let request = undefined;
        let method = undefined;
        if (market['spot']) {
            request = {
                'market': market['id'],
            };
            method = 'spotGetDataApiV1GetDepth';
        } else if (market['swap']) {
            request = {
                'symbol': market['id'],
            };
            if (limit !== undefined) {
                request['level'] = Math.min (limit, 50);
            } else {
                request['level'] = 50;
            }
            if (market['linear']) {
                method = 'usdtGetFutureMarketV1PublicQDepth';
            } else if (market['inverse']) {
                method = 'coinGetFutureMarketV1PublicQDepth';
            }
        }
        const response = await this[method] (this.extend (request, params));
        const timestamp = this.safeNumber2 (response, 'time', 't');
        if (market['spot']) {
            return this.parseOrderBook (response, symbol, timestamp);
        } else if (market['swap']) {
            return this.parseOrderBook (this.safeValue (response, 'result'), symbol, timestamp, 'b', 'a');
        }
    }

    async fetchTrades (symbol, since = undefined, limit = undefined, params = {}) {
        /**
         * @method
         * @name xt#fetchTrades
         * @description get the list of most recent trades for a particular symbol
         * @param {string} symbol unified symbol of the market to fetch trades for
         * @param {int|undefined} since timestamp in ms of the earliest trade to fetch
         * @param {int|undefined} limit the maximum amount of trades to fetch
         * @param {object} params extra parameters specific to the xt api endpoint
         * @returns {[object]} a list of [trade structures]{@link https://docs.ccxt.com/en/latest/manual.html?#public-trades}
         */
        await this.loadMarkets ();
        const market = this.market (symbol);
        const request = {
            'market': market['id'],
        };
        const trades = await this.spotGetDataApiV1GetTrades (this.extend (request, params));
        //
        // [
        //     [
        //     1663887610712,
        //     19391.17,
        //     0.0032,
        //     "bid",
        //     "6978850460677441538"
        //     ],
        // ]
        //
        return this.parseTrades (trades, market);
    }

    parseTrade (trade, market) {
        const side = this.safeString (trade, 3) === 'bid' ? 'buy' : 'sell';
        const timestamp = this.safeNumber (trade, 0);
        const id = this.safeString (trade, 4);
        return {
            'info': trade,
            'id': id,
            'timestamp': timestamp,
            'datetime': this.iso8601 (timestamp),
            'symbol': market['symbol'],
            'order': id,
            'type': undefined,
            'side': side,
            'price': this.safeNumber (trade, 1),
            'amount': this.safeNumber (trade, 2),
        };
    }

    handleErrors (code, reason, url, method, headers, body, response, requestHeaders, requestBody) {
        // TODO: Handle errors
        //
        //     {
        //       "error": {
        //         "code": 20001,
        //         "message": "Insufficient funds",
        //         "description": "Check that the funds are sufficient, given commissions"
        //       }
        //     }
        //
        //     {
        //       "error": {
        //         "code": "600",
        //         "message": "Action not allowed"
        //       }
        //     }
        //
        const error = this.safeValue (response, 'error');
        const errorCode = this.safeString (error, 'code');
        if (errorCode !== undefined) {
            const feedback = this.id + ' ' + body;
            const message = this.safeString2 (error, 'message', 'description');
            this.throwExactlyMatchedException (this.exceptions['exact'], errorCode, feedback);
            this.throwBroadlyMatchedException (this.exceptions['broad'], message, feedback);
            throw new ExchangeError (feedback);
        }
    }

    sign (path, api = 'public', method = 'GET', params = {}, headers = undefined, body = undefined) {
        const query = this.omit (params, this.extractParams (path));
        const implodedPath = this.implodeParams (path, params);
        let url = this.urls['api'][api]['public'] + '/' + implodedPath;
        let getRequest = undefined;
        const keys = Object.keys (query);
        const queryLength = keys.length;
        headers = {
            'Content-Type': 'application/json',
        };
        if (method === 'GET') {
            if (queryLength) {
                getRequest = '?' + this.urlencode (query);
                url = url + getRequest;
            }
        } else {
            body = this.json (params);
        }
        if (api === 'private') {
            this.checkRequiredCredentials ();
            const timestamp = this.nonce ().toString ();
            const payload = [ method, '/api/3/' + implodedPath ];
            if (method === 'GET') {
                if (getRequest !== undefined) {
                    payload.push (getRequest);
                }
            } else {
                payload.push (body);
            }
            payload.push (timestamp);
            const payloadString = payload.join ('');
            const signature = this.hmac (this.encode (payloadString), this.encode (this.secret), 'sha256', 'hex');
            const secondPayload = this.apiKey + ':' + signature + ':' + timestamp;
            const encoded = this.decode (this.stringToBase64 (secondPayload));
            headers['Authorization'] = 'HS256 ' + encoded;
        }
        return { 'url': url, 'method': method, 'body': body, 'headers': headers };
    }
};
