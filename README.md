# Etherscan-test-app Overview

1. Get all of the users transactions, and internal transactions (internal ones mark native transfers)
2. Grab all of the token transfer events from the transactions
3. Remove any temporary transfers for the ERC-20 Events (E.g no need to do caclulate on multi hops, only input and output matter).
4. For each ERC-20 Transfer, you need to grab the surrounding transfers for that token within the DEX e.g
    a. Token0 - Token1 needs to map to a valid stablecoin, if neither do then
    b. find the most liquid path to a stable coin by mapping the DEX transaction and finding an exchange close to the block in which the original transaction occured
    c. use the target transaction to estimate the original price  e,g ETH-BTC transfer, you can either map ETH - USDC or BTC to USDC, and use that as a prepresentation of the price
    d. remove the fees from calculations. Most DEX's have some standard fee such as 0.3%
    e. use x * y = k to approximate the slippage in which occured on the transaction
