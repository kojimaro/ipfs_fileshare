battleABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "bet",
      "outputs": [
        {
          "name": "",
          "type": "uint128"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "round",
      "outputs": [
        {
          "name": "",
          "type": "uint128"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "champ",
      "outputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "contractAddress",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "round",
          "type": "uint128"
        },
        {
          "indexed": false,
          "name": "contractAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Winner",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "DigitalArtBattleTower",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_bet",
          "type": "uint128"
        }
      ],
      "name": "setBet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_contractAddress",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint128"
        },
        {
          "name": "_hp",
          "type": "uint16"
        },
        {
          "name": "_atk",
          "type": "uint16"
        },
        {
          "name": "_def",
          "type": "uint16"
        },
        {
          "name": "_agi",
          "type": "uint16"
        }
      ],
      "name": "duel",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    }
  ]