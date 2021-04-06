import { NodeStepSummary } from "./enums/NodeStepSummary.js";
import { TalentGrid } from "./enums/TalentGrid.js";
export declare const subclassNodeHashes: Record<TalentGrid, {
    trees: {
        top: {
            superAbility: NodeStepSummary;
            melee: NodeStepSummary;
            passives: NodeStepSummary[];
        };
        middle: {
            superAbility: NodeStepSummary;
            melee: NodeStepSummary;
            passives: NodeStepSummary[];
        };
        bottom: {
            superAbility: NodeStepSummary;
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
            superAbility: number;
            melee: number;
            passives: number[];
        };
        middle: {
            superAbility: number;
            melee: number;
            passives: number[];
        };
        bottom: {
            superAbility: number;
            melee: number;
            passives: number[];
        };
    };
};
