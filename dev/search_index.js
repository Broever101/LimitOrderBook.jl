var documenterSearchIndex = {"docs":
[{"location":"#LimitOrderBook.jl","page":"LimitOrderBook.jl","title":"LimitOrderBook.jl","text":"","category":"section"},{"location":"","page":"LimitOrderBook.jl","title":"LimitOrderBook.jl","text":"Modules = [LimitOrderBook]\nOrder   = [:module,:type, :function]\nPrivate = false","category":"page"},{"location":"#LimitOrderBook.AcctMap","page":"LimitOrderBook.jl","title":"LimitOrderBook.AcctMap","text":"AcctMap{Sz,Px,Oid,Aid}\n\nCollection of open orders by account. \n\n{Sz,Px,Oid,Aid} characterize the type of Order present in the AcctMap.  See documentation on Order for more information on these types.\n\nThe account map has the structure of a nested Dict. The outer key is the account id, mapping to an AVLTree of Orders keyed by order id.\n\n\n\n\n\n","category":"type"},{"location":"#LimitOrderBook.Order","page":"LimitOrderBook.jl","title":"LimitOrderBook.Order","text":"Order{Sz<:Real,Px<:Real,Oid<:Integer,Aid<:Integer}\n\nType representing a limit order.\n\nAn Order{Sz<:Real,Px<:Real,Oid<:Integer,Aid<:Integer} is a struct representing a resting Limit Order which contains\n\n- `side::OrderSide`, the side of the book the order will rest in. See [`OrderSide`](@ref) for more info.\n- `size::Sz`, the order size\n- `price::Px`, the price the order is set at\n- `orderid::Oid`, a unique Order ID\n- (optional) `acctid::Union{Aid,Nothing}`, which is set to nothing if the account is unknown or irrelevant.\n\nOne can create a new Order as Order{Sz,Px,Pid,Aid}(side, size, price, orderid, order_mode [,acctid=nothing]), where the types of  size and price will be cast to the correct types. The orderid and acctid types will not be cast in order to avoid ambiguity.\n\n\n\n\n\n","category":"type"},{"location":"#LimitOrderBook.OrderBook","page":"LimitOrderBook.jl","title":"LimitOrderBook.OrderBook","text":"OrderBook{Sz,Px,Oid,Aid}\n\nAn OrderBook is a data structure containing limit orders represented as objects of type Order{Sz,Px,Oid,Aid}.\n\nSee documentation on Order for more information on the parametric type Order{Sz,Px,Oid,Aid}.\n\nHow to use Orderbook:\n\nInitialize an empty limit order book as OrderBook{Sz,Px,Oid,Aid}()\nSubmit or cancel limit orders with submit_limit_order! and cancel_order!. \nSubmit market orders with submit_market_order!\nRetrieve order book state information with print or show methods, as well as book_depth_info, best_bid_ask, volume_bid_ask, n_orders_bid_ask and get_acct\nWrite book state to csv file with write_csv.\n\n\n\n\n\n","category":"type"},{"location":"#LimitOrderBook.OrderSide","page":"LimitOrderBook.jl","title":"LimitOrderBook.OrderSide","text":"OrderSide\n\nType representing whether an order is a buy order or sell order. New instance can be generated with OrderSide(::Bool) or by using exported constants BUY_ORDER and SELL_ORDER\n\n\n\n\n\n","category":"type"},{"location":"#LimitOrderBook.OrderTraits","page":"LimitOrderBook.jl","title":"LimitOrderBook.OrderTraits","text":"OrderTraits(allornone::Bool,immediateorcancel::Bool,allow_cross::Bool)\n\nOrderTraits specify order traits which modify execution logic.\n\nAn instance can be initialized by using the keyword intializer or by using the exported constants VANILLA_FILLTYPE, IMMEDIATEORCANCEL_FILLTYPE, FILLORKILL_FILLTYPE.\n\nThe default execution logic is represented by VANILLA_FILLTYPE.\n\nNote: This feature is not well supported yet.  Other than the constants described above, use non-vanilla modes with caution.\n\n\n\n\n\n","category":"type"},{"location":"#LimitOrderBook.ask_orders-Tuple{LimitOrderBook.OneSidedBook}","page":"LimitOrderBook.jl","title":"LimitOrderBook.ask_orders","text":"ask_orders(sb::OneSidedBook)\n\nReturns an iterator over all __ask orders__ by price/time priority.\n\n\n\n\n\n","category":"method"},{"location":"#LimitOrderBook.best_bid_ask-Union{Tuple{OrderBook{Sz, Px, Oid, Aid}}, Tuple{Aid}, Tuple{Oid}, Tuple{Px}, Tuple{Sz}} where {Sz, Px, Oid, Aid}","page":"LimitOrderBook.jl","title":"LimitOrderBook.best_bid_ask","text":"best_bid_ask(ob::OrderBook)\n\nReturn best bid/ask prices in order book as a Tuple\n\n\n\n\n\n","category":"method"},{"location":"#LimitOrderBook.bid_orders-Tuple{LimitOrderBook.OneSidedBook}","page":"LimitOrderBook.jl","title":"LimitOrderBook.bid_orders","text":"bid_orders(sb::OneSidedBook)\n\nReturns an iterator over all __bid orders__ by price/time priority.\n\n\n\n\n\n","category":"method"},{"location":"#LimitOrderBook.book_depth_info-Tuple{OrderBook}","page":"LimitOrderBook.jl","title":"LimitOrderBook.book_depth_info","text":"book_depth_info(ob::OrderBook; max_depth=5)\n\nReturns prices, volumes and order counts at bid and ask in ob::OrderBook  until fixed depth max_depth as a nested Dict.\n\n\n\n\n\n","category":"method"},{"location":"#LimitOrderBook.cancel_order!-Union{Tuple{Oid}, Tuple{Px}, Tuple{Sz}, Tuple{OrderBook{Sz, Px, Oid, var\"#s19\"} where var\"#s19\"<:Integer, Oid, Px, OrderSide}} where {Sz, Px, Oid}","page":"LimitOrderBook.jl","title":"LimitOrderBook.cancel_order!","text":"cancel_order!(ob::OrderBook, o::Order)\ncancel_order!(ob::OrderBook, orderid, price, side [, acct_id=nothing])\n\nCancels Order o, or order with matching information from OrderBook.\n\nProvide acct_id if known to guarantee correct account tracking.\n\n\n\n\n\n","category":"method"},{"location":"#LimitOrderBook.get_acct-Union{Tuple{Aid}, Tuple{Oid}, Tuple{Px}, Tuple{Sz}, Tuple{OrderBook{Sz, Px, Oid, Aid}, Aid}} where {Sz, Px, Oid, Aid}","page":"LimitOrderBook.jl","title":"LimitOrderBook.get_acct","text":"get_acct(ob::OrderBook{Sz,Px,Oid,Aid},acct_id::Aid)\n\nReturn all open orders assigned to account acct_id\n\n\n\n\n\n","category":"method"},{"location":"#LimitOrderBook.n_orders_bid_ask-Tuple{OrderBook}","page":"LimitOrderBook.jl","title":"LimitOrderBook.n_orders_bid_ask","text":"n_orders_bid_ask(ob::OrderBook)\n\nReturn total number of orders on each side of order book, returned as a Tuple\n\n\n\n\n\n","category":"method"},{"location":"#LimitOrderBook.order_types-Union{Tuple{Order{Sz, Px, Oid, Aid}}, Tuple{Aid}, Tuple{Oid}, Tuple{Px}, Tuple{Sz}} where {Sz, Px, Oid, Aid}","page":"LimitOrderBook.jl","title":"LimitOrderBook.order_types","text":"order_types(::Order{Sz,Px,Oid,Aid})\norder_types(::OneSidedBook{Sz,Px,Oid,Aid})\norder_types(::OrderBook{Sz,Px,Oid,Aid})\n\nReturn parametric types of either an Order, OrderQueue, OneSidedbook or OrderBook.\n\n\n\n\n\n","category":"method"},{"location":"#LimitOrderBook.submit_limit_order!-Union{Tuple{Aid}, Tuple{Oid}, Tuple{Px}, Tuple{Sz}, Tuple{OrderBook{Sz, Px, Oid, Aid}, Oid, OrderSide, Real, Real}, Tuple{OrderBook{Sz, Px, Oid, Aid}, Oid, OrderSide, Real, Real, Union{Nothing, Aid}}, Tuple{OrderBook{Sz, Px, Oid, Aid}, Oid, OrderSide, Real, Real, Union{Nothing, Aid}, OrderTraits}} where {Sz, Px, Oid, Aid}","page":"LimitOrderBook.jl","title":"LimitOrderBook.submit_limit_order!","text":"submit_limit_order!(\n    ob::OrderBook{Sz,Px,Oid,Aid},\n    orderid::Oid,\n    side::OrderSide,\n    limit_price::Real,\n    limit_size::Real,\n    [, acct_id::Aid, fill_mode::OrderTraits ]\n)\n\nEnter limit order with size limit_size, price limit_price with side::OrderSide into ob::OrderBook.\n\nIf an account if acct_id is provided, account holdings are tracked in ob.acct_map.\n\nOrder execution logic can be modified according to the argument fill_mode::OrderTraits which defaults to fill_mode=VANILLA_FILLTYPE, representing the default order matching mode. \n\nsubmit_limit_order! returns tuple of \n\nnew_open_order::Order representing the order left in the book after matching. Is nothing if no order was inserted\norder_match_lst::Vector{Order} representing the matched orders if the order crosses the book.\nleft_to_trade::Sz representing the size of the portion of the order which could neither inserted nor matched.\n\n\n\n\n\n","category":"method"},{"location":"#LimitOrderBook.submit_market_order!-Union{Tuple{Aid}, Tuple{Oid}, Tuple{Px}, Tuple{Sz}, Tuple{OrderBook{Sz, Px, Oid, Aid}, OrderSide, Real}} where {Sz, Px, Oid, Aid}","page":"LimitOrderBook.jl","title":"LimitOrderBook.submit_market_order!","text":"submit_market_order!(ob::OrderBook,side::OrderSide,mo_size[,fill_mode::OrderTraits])\n\nSubmit market order to ob::OrderBook with side::OrderSide and size mo_size. Optionally mode::OrderTraits may be provided to modify fill logic. Market orders are filled by price-time priority.\n\nReturns tuple ( ord_lst::Vector{Order}, left_to_trade::Sz ) where\n\nord_lst is a list of limit orders that market order matched with\nleft_to_trade is the remaining size of un-filled order ( ==0 if order is complete, >0 if incomplete)\n\nNote: Only mode.allornone will be considered from mode::OrderTraits. All other entries will be ignored.\n\n\n\n\n\n","category":"method"},{"location":"#LimitOrderBook.submit_market_order_byfunds!","page":"LimitOrderBook.jl","title":"LimitOrderBook.submit_market_order_byfunds!","text":"submit_market_order_byfunds!(ob::OrderBook,side::Symbol,funds[,mode::OrderTraits])\n\nSubmit market order to ob::OrderBook side::OrderSide and available funds funds::Real. Optionally mode::OrderTraits may be provided to modify fill logic. Market orders are filled by price-time priority.\n\nFunctionality is exactly the same as submit_market_order! except available funds (max total price paid on order)  is provided, rather than number of shares (order size).\n\nReturns tuple ( ord_lst::Vector{Order}, funds_leftover ) where\n\nord_lst is a list of limit orders that market order matched with\nfunds_leftover is the amount of remaining funds if not enough liquidity was available ( ==0 if order is complete, >0 if incomplete)\n\nNote: Only mode.allornone will be considered from mode::OrderTraits. All other entries will be ignored.\n\n\n\n\n\n","category":"function"},{"location":"#LimitOrderBook.volume_bid_ask-Union{Tuple{OrderBook{Sz, Px, Oid, Aid}}, Tuple{Aid}, Tuple{Oid}, Tuple{Px}, Tuple{Sz}} where {Sz, Px, Oid, Aid}","page":"LimitOrderBook.jl","title":"LimitOrderBook.volume_bid_ask","text":"volume_bid_ask(ob::OrderBook)\n\nReturn total bid and ask volume from order book as a Tuple.\n\n\n\n\n\n","category":"method"},{"location":"#LimitOrderBook.write_csv-Tuple{IO, OrderBook}","page":"LimitOrderBook.jl","title":"LimitOrderBook.write_csv","text":"write_csv(\n    io::IO,\n    ob::OrderBook;\n    row_formatter = _order_to_csv,\n    header = \"TRD,ID,SIDE,SIZE,PX,ACCT\",\n    )\n\nWrite OrderBook ob to an IO stream into csv format where each row corresponds to an order The formatting for each row is given by the function argument row_formatter(::Order)::String. The csv header can be provided as an argument where setting it to nothing writes no header.\n\n\n\n\n\n","category":"method"}]
}