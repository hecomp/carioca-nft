async function main() {
    const Carioca = await ethers.getContractFactory("Carioca")
  
    // Start deployment, returning a promise that resolves to a contract object
    const carioca = await Carioca.deploy()
    console.log("Contract deployed to address:", carioca.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  