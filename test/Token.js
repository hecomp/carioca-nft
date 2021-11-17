const { expect } = require("chai");

describe("Carioca contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const Carioca = await ethers.getContractFactory("Carioca");

    const hardhatCarioca = await Carioca.deploy();

    const ownerBalance = await hardhatCarioca.balanceOf(owner.address);
    expect(await hardhatCarioca.totalSupply()).to.equal(ownerBalance);
  });
});