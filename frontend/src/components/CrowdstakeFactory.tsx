import React, { useContext, useEffect, useState } from 'react';
import { CrowdstakeFactoryContext } from "./../hardhat/SymfoniContext";

interface Props { }

export const CrowdstakeFactory: React.FC<Props> = () => {
    const factory = useContext(CrowdstakeFactoryContext)

    const [duration, setDuration] = useState("");
    const [fee_perc, setFee] = useState("");

    useEffect(() => {
        const doAsync = async () => {
            if (!factory.instance) return
            console.log("Factory is deployed at ", factory.instance.address)
        };
        doAsync();
    }, [factory])

    const handleCreate = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (!factory.instance) throw Error("Greeter instance not ready")
        if (factory.instance) {
            const tx = await factory.instance.create(duration, fee_perc)
            console.log("create tx", tx)
            console.log("New crowdstake, result: ", await tx.wait())
        }
    }

    return (
        <div>
            <p>{message}</p>
            <input onChange={(e) => setDuration(e.target.value)}></input>
            <input onChange={(e) => setFee(e.target.value)}></input>
            <button onClick={(e) => handleCreate(e)}>Create</button>
        </div>
    )
}
