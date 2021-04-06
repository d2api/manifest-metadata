import { NodeStepSummary } from "./enums/NodeStepSummary.js";
import { TalentGrid } from "./enums/TalentGrid.js";
export const subclassNodeHashes = {
    [TalentGrid.Stormcaller]: {
        trees: {
            top: {
                superAbility: NodeStepSummary.Stormtrance,
                melee: NodeStepSummary.ChainLightning,
                passives: [
                    NodeStepSummary.Transcendence,
                    NodeStepSummary.ArcWeb,
                    NodeStepSummary.IonicBlink,
                ],
            },
            middle: {
                superAbility: NodeStepSummary.ChaosReach,
                melee: NodeStepSummary.BallLightning,
                passives: [NodeStepSummary.IonicTrace, NodeStepSummary.Pulsewave],
            },
            bottom: {
                superAbility: NodeStepSummary.Stormtrance,
                melee: NodeStepSummary.RisingStorm,
                passives: [
                    NodeStepSummary.Landfall,
                    NodeStepSummary.ElectrostaticSurge,
                    NodeStepSummary.ArcSoul,
                ],
            },
        },
        grenades: [
            NodeStepSummary.StormGrenade,
            NodeStepSummary.ArcboltGrenade,
            NodeStepSummary.PulseGrenade,
        ],
        jumps: [
            NodeStepSummary.StrafeGlide,
            NodeStepSummary.BurstGlide,
            NodeStepSummary.BalancedGlide,
        ],
        classAbilities: [
            NodeStepSummary.HealingRift,
            NodeStepSummary.EmpoweringRift,
        ],
    },
    [TalentGrid.Dawnblade]: {
        trees: {
            top: {
                superAbility: NodeStepSummary.Daybreak,
                melee: NodeStepSummary.CelestialFire,
                passives: [
                    NodeStepSummary.WingedSun,
                    NodeStepSummary.HeatRises,
                    NodeStepSummary.IcarusDash,
                ],
            },
            middle: {
                superAbility: NodeStepSummary.WellOfRadiance,
                melee: NodeStepSummary.GuidingFlame,
                passives: [
                    NodeStepSummary.DivineProtection,
                    NodeStepSummary.BenevolentDawn,
                ],
            },
            bottom: {
                superAbility: NodeStepSummary.Daybreak,
                melee: NodeStepSummary.IgnitingTouch,
                passives: [
                    NodeStepSummary.FatedForTheFlame,
                    NodeStepSummary.EverlastingFire,
                    NodeStepSummary.PhoenixDive,
                ],
            },
        },
        grenades: [
            NodeStepSummary.FusionGrenade,
            NodeStepSummary.SolarGrenade,
            NodeStepSummary.FireboltGrenade,
        ],
        jumps: [
            NodeStepSummary.StrafeGlide,
            NodeStepSummary.BurstGlide,
            NodeStepSummary.BalancedGlide,
        ],
        classAbilities: [
            NodeStepSummary.HealingRift,
            NodeStepSummary.EmpoweringRift,
        ],
    },
    [TalentGrid.Nightstalker]: {
        trees: {
            top: {
                superAbility: NodeStepSummary.Shadowshot,
                melee: NodeStepSummary.SnareBomb,
                passives: [
                    NodeStepSummary.KeenScout,
                    NodeStepSummary.Deadfall,
                    NodeStepSummary.VanishingStep,
                ],
            },
            middle: {
                superAbility: NodeStepSummary.SpectralBlades,
                melee: NodeStepSummary.CorrosiveSmoke,
                passives: [
                    NodeStepSummary.FlawlessExecution,
                    NodeStepSummary.ShatteringStrike,
                ],
            },
            bottom: {
                superAbility: NodeStepSummary.Shadowshot,
                melee: NodeStepSummary.VanishInSmoke,
                passives: [
                    NodeStepSummary.Lockdown,
                    NodeStepSummary.CombatProvision,
                    NodeStepSummary.MoebiusQuiver,
                ],
            },
        },
        grenades: [
            NodeStepSummary.VoidwallGrenade,
            NodeStepSummary.VortexGrenade,
            NodeStepSummary.SpikeGrenade,
        ],
        jumps: [
            NodeStepSummary.HighJump,
            NodeStepSummary.StrafeJump,
            NodeStepSummary.TripleJump,
        ],
        classAbilities: [
            NodeStepSummary.MarksmansDodge,
            NodeStepSummary.GamblersDodge,
        ],
    },
    [TalentGrid.Sentinel]: {
        trees: {
            top: {
                superAbility: NodeStepSummary.SentinelShield,
                melee: NodeStepSummary.DefensiveStrike,
                passives: [
                    NodeStepSummary.RallyingForce,
                    NodeStepSummary.TurnTheTide,
                    NodeStepSummary.WardOfDawn,
                ],
            },
            middle: {
                superAbility: NodeStepSummary.BannerShield,
                melee: NodeStepSummary.TacticalStrike,
                passives: [
                    NodeStepSummary.ControlledDemolition,
                    NodeStepSummary.Resupply,
                ],
            },
            bottom: {
                superAbility: NodeStepSummary.SentinelShield,
                melee: NodeStepSummary.ShieldBash,
                passives: [
                    NodeStepSummary.SuperiorArsenal,
                    NodeStepSummary.InTheTrenches,
                    NodeStepSummary.SecondShield,
                ],
            },
        },
        grenades: [
            NodeStepSummary.SuppressorGrenade,
            NodeStepSummary.MagneticGrenade,
            NodeStepSummary.VoidwallGrenade,
        ],
        jumps: [
            NodeStepSummary.HighLift,
            NodeStepSummary.StrafeLift,
            NodeStepSummary.CatapultLift,
        ],
        classAbilities: [
            NodeStepSummary.ToweringBarricade,
            NodeStepSummary.RallyBarricade,
        ],
    },
    [TalentGrid.Sunbreaker]: {
        trees: {
            top: {
                superAbility: NodeStepSummary.HammerOfSol,
                melee: NodeStepSummary.HammerStrike,
                passives: [
                    NodeStepSummary.TemperedMetal,
                    NodeStepSummary.ExplosivePyre,
                    NodeStepSummary.VulcansRage,
                ],
            },
            middle: {
                superAbility: NodeStepSummary.BurningMaul,
                melee: NodeStepSummary.ThrowingHammer,
                passives: [
                    NodeStepSummary.TirelessWarrior,
                    NodeStepSummary.RoaringFlames,
                ],
            },
            bottom: {
                superAbility: NodeStepSummary.HammerOfSol,
                melee: NodeStepSummary.MortarBlast,
                passives: [
                    NodeStepSummary.SolInvictus,
                    NodeStepSummary.SunWarrior,
                    NodeStepSummary.EndlessSiege,
                ],
            },
        },
        grenades: [
            NodeStepSummary.FusionGrenade,
            NodeStepSummary.IncendiaryGrenade,
            NodeStepSummary.ThermiteGrenade,
        ],
        jumps: [
            NodeStepSummary.HighLift,
            NodeStepSummary.StrafeLift,
            NodeStepSummary.CatapultLift,
        ],
        classAbilities: [
            NodeStepSummary.ToweringBarricade,
            NodeStepSummary.RallyBarricade,
        ],
    },
    [TalentGrid.Striker]: {
        trees: {
            top: {
                superAbility: NodeStepSummary.FistsOfHavoc,
                melee: NodeStepSummary.SeismicStrike,
                passives: [
                    NodeStepSummary.Aftershocks,
                    NodeStepSummary.Magnitude,
                    NodeStepSummary.TerminalVelocity,
                ],
            },
            middle: {
                superAbility: NodeStepSummary.Thundercrash,
                melee: NodeStepSummary.BallisticSlam,
                passives: [
                    NodeStepSummary.ImpactConversion,
                    NodeStepSummary.InertiaOverride,
                ],
            },
            bottom: {
                superAbility: NodeStepSummary.FistsOfHavoc,
                melee: NodeStepSummary.FrontalAssault,
                passives: [
                    NodeStepSummary.Reversal,
                    NodeStepSummary.Knockout,
                    NodeStepSummary.Trample,
                ],
            },
        },
        grenades: [
            NodeStepSummary.LightningGrenade,
            NodeStepSummary.FlashbangGrenade,
            NodeStepSummary.PulseGrenade,
        ],
        jumps: [
            NodeStepSummary.HighLift,
            NodeStepSummary.StrafeLift,
            NodeStepSummary.CatapultLift,
        ],
        classAbilities: [
            NodeStepSummary.ToweringBarricade,
            NodeStepSummary.RallyBarricade,
        ],
    },
    [TalentGrid.Arcstrider]: {
        trees: {
            top: {
                superAbility: NodeStepSummary.ArcStaff,
                melee: NodeStepSummary.CombinationBlow,
                passives: [
                    NodeStepSummary.CombatFlow,
                    NodeStepSummary.DeadlyReach,
                    NodeStepSummary.LethalCurrent,
                ],
            },
            middle: {
                superAbility: NodeStepSummary.WhirlwindGuard,
                melee: NodeStepSummary.TempestStrike,
                passives: [NodeStepSummary.LightningWeave, NodeStepSummary.EbbAndFlow],
            },
            bottom: {
                superAbility: NodeStepSummary.ArcStaff,
                melee: NodeStepSummary.DisorientingBlow,
                passives: [
                    NodeStepSummary.FocusedBreathing,
                    NodeStepSummary.CombatMeditation,
                    NodeStepSummary.LightningReflexes,
                ],
            },
        },
        grenades: [
            NodeStepSummary.ArcboltGrenade,
            NodeStepSummary.SkipGrenade,
            NodeStepSummary.FluxGrenade,
        ],
        jumps: [
            NodeStepSummary.HighJump,
            NodeStepSummary.StrafeJump,
            NodeStepSummary.TripleJump,
        ],
        classAbilities: [
            NodeStepSummary.MarksmansDodge,
            NodeStepSummary.GamblersDodge,
        ],
    },
    [TalentGrid.Gunslinger]: {
        trees: {
            top: {
                superAbility: NodeStepSummary.GoldenGun,
                melee: NodeStepSummary.ProximityExplosiveKnife,
                passives: [
                    NodeStepSummary.ChainsOfWoe,
                    NodeStepSummary.Deadshot,
                    NodeStepSummary.SixShooter,
                ],
            },
            middle: {
                superAbility: NodeStepSummary.BladeBarrage,
                melee: NodeStepSummary.KnifeTrick,
                passives: [
                    NodeStepSummary.PlayingWithFire,
                    NodeStepSummary.TheBurningEdge,
                ],
            },
            bottom: {
                superAbility: NodeStepSummary.GoldenGun,
                melee: NodeStepSummary.WeightedKnife,
                passives: [
                    NodeStepSummary.PracticeMakesPerfect,
                    NodeStepSummary.KnockEmDown,
                    NodeStepSummary.LineEmUp,
                ],
            },
        },
        grenades: [
            NodeStepSummary.TripmineGrenade,
            NodeStepSummary.IncendiaryGrenade,
            NodeStepSummary.SwarmGrenade,
        ],
        jumps: [
            NodeStepSummary.HighJump,
            NodeStepSummary.StrafeJump,
            NodeStepSummary.TripleJump,
        ],
        classAbilities: [
            NodeStepSummary.MarksmansDodge,
            NodeStepSummary.GamblersDodge,
        ],
    },
    [TalentGrid.Voidwalker]: {
        trees: {
            top: {
                superAbility: NodeStepSummary.NovaBomb,
                melee: NodeStepSummary.EntropicPull,
                passives: [
                    NodeStepSummary.ChaosAccelerant,
                    NodeStepSummary.Bloom,
                    NodeStepSummary.Cataclysm,
                ],
            },
            middle: {
                superAbility: NodeStepSummary.NovaWarp,
                melee: NodeStepSummary.AtomicBreach,
                passives: [
                    NodeStepSummary.HandheldSupernova,
                    NodeStepSummary.DarkMatter,
                ],
            },
            bottom: {
                superAbility: NodeStepSummary.NovaBomb,
                melee: NodeStepSummary.Devour,
                passives: [
                    NodeStepSummary.FeedTheVoid,
                    NodeStepSummary.Insatiable,
                    NodeStepSummary.Vortex,
                ],
            },
        },
        grenades: [
            NodeStepSummary.ScatterGrenade,
            NodeStepSummary.VortexGrenade,
            NodeStepSummary.AxionBolt,
        ],
        jumps: [
            NodeStepSummary.StrafeGlide,
            NodeStepSummary.Blink,
            NodeStepSummary.BurstGlide,
        ],
        classAbilities: [
            NodeStepSummary.HealingRift,
            NodeStepSummary.EmpoweringRift,
        ],
    },
};
export const allMeleeNodes = Object.values(subclassNodeHashes).flatMap((s) => Object.values(s.trees).map((t) => t.melee));
export const allGrenadeNodes = [
    ...new Set(Object.values(subclassNodeHashes).flatMap((s) => s.grenades)),
];
export const allClassAbilityNodes = [
    ...new Set(Object.values(subclassNodeHashes).flatMap((s) => s.classAbilities)),
];
export const allJumpNodes = [
    ...new Set(Object.values(subclassNodeHashes).flatMap((s) => s.jumps)),
];
/** which indices to find defs at, within the `DestinyTalentGridDefinition.nodes` array */
export const subclassNodeIndices = {
    classAbilities: [2, 3],
    jumps: [4, 5, 6],
    grenades: [7, 8, 9],
    trees: {
        top: {
            superAbility: 10,
            melee: 11,
            passives: [12, 13, 14],
        },
        middle: {
            superAbility: 20,
            melee: 21,
            passives: [22, 23],
        },
        bottom: {
            superAbility: 10,
            melee: 15,
            passives: [16, 17, 18],
        },
    },
};
