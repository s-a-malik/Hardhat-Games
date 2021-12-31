//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract Game4 {
  event Winner(address winner);

  bytes32 internal constant SECRET_SLOT = keccak256("secret.variable.slot");

  constructor(uint secret) {
    bytes32 slot = SECRET_SLOT;
    // this writes in assembly language
    assembly {
      // this is an opcode that stores secret at the address of slot
      sstore(slot, secret)
    }
  }

  function win(uint guess) payable public {
    uint secret;
    bytes32 slot = SECRET_SLOT;
    assembly {
      secret := sload(slot)
    }
    require(guess == secret);
    emit Winner(msg.sender);
  }
}