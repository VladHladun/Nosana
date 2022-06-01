function countScenarioHashBySigs(bytes4[] calldata _signatures)
        external
        pure
        returns (bytes32 hash)
    {
        hash = SignatureHelper.getHash(_signatures);
    }

    function getSignature(bytes calldata _data)
        external
        pure
        returns (bytes4 signature)
    {
        signature = SignatureHelper.getSignature(_data);
    }
