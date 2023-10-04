export type TStationaryGasCoefOpt = {
    idMixed: number;
    nameMixed: string
}

export type TStationaryGasBurnOpt = {
    oxi_coef: number;
}

export type TStationaryFuelBurnOpt = {
    oxi_coef: number,
    fuel_emissions: number,
    trans_coef: number
}

export type TTorchFuelBurnOpt = {
    unburn_coef: number,
    rho_CO2: number,
    rho_CH2: number
}

export type TWasteWaterCH4Opt = {
    organic_waste: number,
    B0: number,
    cor_coef: number
}

export type TWasteWaterN2OOpt = {
    n_waste: number,
    n_coef: number,
    uncons_prot: number,
    ind_prot: number,
    waste_coef: number,
    trans_coef: number
}

export type TWasteBurnCO2MixedOpt = {
    oxi_coef: number;
}

export type TWasteBurnCO2SolidOpt = {
    oxi_coef: number;
}

export type TWasteBurnCO2LiquidOpt = {
    oxi_coef: number;
}

export type TAllOpt = TStationaryGasCoefOpt
    | TStationaryGasBurnOpt
    | TStationaryFuelBurnOpt
    | TTorchFuelBurnOpt
    | TWasteWaterCH4Opt
    | TWasteWaterN2OOpt
    | TWasteBurnCO2MixedOpt
    | TWasteBurnCO2SolidOpt
    | TWasteBurnCO2LiquidOpt