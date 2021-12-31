// replace with the game address
// Game1 0xdC295dFA26fA005141D480f970089D33BAeF1f01
// Game2 0x6f07aDeFF0b9fCbe0238cC1EC3c6d0E9bC13Bc5C
// Game3 0xD65dAAaBcfa08248cEC75FE84C7D0f513bc371a3
// Game4 0x70Fad8203BFB63165fdB3182ca51507C2D5E5926 secret = 420. 
const GAME_ADDRESS = "0x6f07aDeFF0b9fCbe0238cC1EC3c6d0E9bC13Bc5C";

async function main() {
  // update ABI
  const game = await hre.ethers.getContractAt("Game2", GAME_ADDRESS);
  // Game1
  
  // just call the function to win
  // const tx = await game.win();

  // Game2

  // 210 + 56 = 266 = 256 + 10  = 10 after overflow so this will win
  const tx = await game.win(56);


  // Game3

  // send ether to the contract
  // let tx = 0;
  // for (i = 0; i < 3; i++) {
  //   // override args in the function call to send ether.
  //   tx = await game.win({value: hre.ethers.utils.parseUnits('1', 'gwei')});
  // }

  // Game4
  // call the function with a secret
  // const tx = await game.win(420);


  //

  const receipt = await tx.wait();

  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
