// replace with the game address
// Game1 0xdC295dFA26fA005141D480f970089D33BAeF1f01
// Game2 0x6f07aDeFF0b9fCbe0238cC1EC3c6d0E9bC13Bc5C
// Game3 0xD65dAAaBcfa08248cEC75FE84C7D0f513bc371a3
// Game4 0x70Fad8203BFB63165fdB3182ca51507C2D5E5926 secret = 420. 
const GAME_ADDRESS = "0x6f07aDeFF0b9fCbe0238cC1EC3c6d0E9bC13Bc5C";  

async function main() {
  const game = await hre.ethers.getContractAt("Game2", GAME_ADDRESS);

  game.on('Winner', (addr) => {
    console.log(addr + ' won!');
  });
}

main();
