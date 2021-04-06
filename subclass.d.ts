import { NodeStepSummary } from "./enums/NodeStepSummary.js";
import { TalentGrid } from "./enums/TalentGrid.js";
export declare const subclassNodeHashes: Record<TalentGrid, {
    trees: {
        top: {
            super: NodeStepSummary;
            melee: NodeStepSummary;
            passives: NodeStepSummary[];
        };
        middle: {
            super: NodeStepSummary;
            melee: NodeStepSummary;
            passives: NodeStepSummary[];
        };
        bottom: {
            super: NodeStepSummary;
            melee: NodeStepSummary;
            passives: NodeStepSummary[];
        };
    };
    grenades: NodeStepSummary[];
    jumps: NodeStepSummary[];
    classAbilities: NodeStepSummary[];
}>;
export declare const allMeleeNodes: NodeStepSummary[];
export declare const allGrenadeNodes: NodeStepSummary[];
export declare const allClassAbilityNodes: NodeStepSummary[];
export declare const allJumpNodes: NodeStepSummary[];
/** which indices to find defs at, within the `DestinyTalentGridDefinition.nodes` array */
export declare const subclassNodeIndices: {
    classAbilities: number[];
    jumps: number[];
    grenades: number[];
    trees: {
        top: {
            super: number;
            melee: number;
            passives: number[];
        };
        middle: {
            super: number;
            melee: number;
            passives: number[];
        };
        bottom: {
            super: number;
            melee: number;
            passives: number[];
        };
    };
};
