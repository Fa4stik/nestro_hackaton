export type TAcquiredEnergyEmissions = {
    energy_cons: number;
    coef: number;
}

export type TFugitiveEmissions = {
    fuel_consumption: number,
    CO2_coef: number,
    CH4_coef: number
}

export type TStationaryGasCoef = {
    chem_content: number;
    chem_formula: string;
}

export type TStationaryGasBurn = {
    fuel_consumption: number,
    gas_coef_id: number
}

export type TStationaryFuelBurn = {
    fuel_consumption: number;
}

export type TTorchFuelCoef = {
    idMixed: number;
    chem_formula: string;
    chem_content: number;
}

export type TTorchFuelBurn = {
    fuel_consumption: number,
    coef_id: number;
}

export type TTransport = {
    fuel_volume: number,
    rho: number,
    CO2_coef: number
}

export type TWasteWaterCH4 = {
    volume: number,
    organic_coef: number
}

export type TWasteWaterN2O = {
    prot: number
}

export type TWasteBurnN2O = {
    mass: number,
    emission_coef: number;
}

export type TWasteBurnMixedCoef = {
    idMixed: number,
    comp: number,
    portion: number
}

export type TWasteBurnCO2Mixed = {
    mass: number;
    coef_id: number;
}

export type TWasteBurnCO2Solid = {
    mass: number,
    dry_coef: number,
    carbon_coef: number,
    fossil_coef: number
}

export type TWasteBurnCO2Liquid = {
    mass: number,
    carbon_coef: number
}

type WithID<T> = T & { id: number };

export type TAllFormulas = WithID<TAcquiredEnergyEmissions>
    | WithID<TFugitiveEmissions>
    | WithID<TStationaryGasCoef>
    | WithID<TStationaryGasBurn>
    | WithID<TStationaryFuelBurn>
    | WithID<TTorchFuelCoef>
    | WithID<TTorchFuelBurn>
    | WithID<TTransport>
    | WithID<TWasteWaterCH4>
    | WithID<TWasteWaterN2O>
    | WithID<TWasteBurnMixedCoef>
    | WithID<TWasteBurnCO2Mixed>
    | WithID<TWasteBurnCO2Solid>
    | WithID<TWasteBurnCO2Liquid>

export type TAllDataForTable = {
    resultAcquiredEmienergyEmissions: WithID<TAcquiredEnergyEmissions>[],
    resultStationaryFuelBurn: WithID<TStationaryFuelBurn>[],
}