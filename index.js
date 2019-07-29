const { LibraWallet, LibraClient, LibraNetwork } = require('kulap-libra')

const wallet = new LibraWallet()
const account = wallet.newAccount() // fix wallet: 039a80b954c4b73fb1e4d7a44b28d8036fea6eb0342c5dfb163b62952e1ad4bd
const client = new LibraClient({ network: LibraNetwork.Testnet })


main()

async function main () {
  console.log('==========Miniting Account==========')
  await minitingAccount()
  await checkingBalance('039a80b954c4b73fb1e4d7a44b28d8036fea6eb0342c5dfb163b62952e1ad4bd')
}

async function minitingAccount () {
  await client.mintWithFaucetService(account.getAddress(), 20e6);
}

async function checkingBalance (account) {
  const accountAddress = account;
  const accountState = await client.getAccountState(accountAddress);
  console.log('================== Balance ==================')
  console.log(accountState.balance.toString());
}
