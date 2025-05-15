async function getContractAndSigner(cName, cAddress, signerIdx = 0) {
    
    // Getting the default signer.
    const hardhatSigners = await hre.ethers.getSigners();
    const signer = hardhatSigners[signerIdx];
  
    const contract = await hre.ethers.getContractAt(
        cName,
        cAddress,
        signer
    );
  
    return [ contract, signer ];
  }

async function constructor() {
    console.log("Exercise 3: Constructor");
  
    const cName = "Lock3";
    const cAddress = "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6";
  
    const [ lock, signer ] = await getContractAndSigner(cName, cAddress);
  
    let blockNum = await signer.provider.getBlockNumber();
    console.log(cName + " blockNumber:", Number(blockNum));
  }

constructor();