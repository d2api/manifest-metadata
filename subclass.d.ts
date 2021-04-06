import { NodeStepSummary } from "./enums/NodeStepSummary.js";
import { TalentGrid } from "./enums/TalentGrid.js";
export declare const subclassNodes: Record<TalentGrid, {
    trees: {
        top: {
            super: NodeStepSummary;
            melee: NodeStepSummary;
            passives: NodeStepSummary[];
        };
        bottom: {
            super: NodeStepSummary;
            melee: NodeStepSummary;
            passives: NodeStepSummary[];
        };
        middle: {
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
