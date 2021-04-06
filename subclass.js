import { NodeStepSummary } from "./enums/NodeStepSummary.js";
import { TalentGrid } from "./enums/TalentGrid.js";
export const subclassNodes = {
    [TalentGrid.Stormcaller]: {
        trees: {
            top: {
                super: NodeStepSummary.Stormtrance,
                melee: NodeStepSummary.ChainLightning,
                passives: [
                    NodeStepSummary.Transcendence,
                    NodeStepSummary.ArcWeb,
                    NodeStepSummary.IonicBlink,
                ],
            },
            bottom: {
                super: NodeStepSummary.Stormtrance,
                melee: NodeStepSummary.RisingStorm,
                passives: [
                    NodeStepSummary.Landfall,
                    NodeStepSummary.ElectrostaticSurge,
                    NodeStepSummary.ArcSoul,
                ],
            },
            middle: {
                super: NodeStepSummary.ChaosReach,
                melee: NodeStepSummary.BallLightning,
                passives: [NodeStepSummary.IonicTrace, NodeStepSummary.Pulsewave],
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
                super: NodeStepSummary.Daybreak,
                melee: NodeStepSummary.CelestialFire,
                passives: [
                    NodeStepSummary.WingedSun,
                    NodeStepSummary.HeatRises,
                    NodeStepSummary.IcarusDash,
                ],
            },
            bottom: {
                super: NodeStepSummary.Daybreak,
                melee: NodeStepSummary.IgnitingTouch,
                passives: [
                    NodeStepSummary.FatedForTheFlame,
                    NodeStepSummary.EverlastingFire,
                    NodeStepSummary.PhoenixDive,
                ],
            },
            middle: {
                super: NodeStepSummary.WellOfRadiance,
                melee: NodeStepSummary.GuidingFlame,
                passives: [
                    NodeStepSummary.DivineProtection,
                    NodeStepSummary.BenevolentDawn,
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
                super: NodeStepSummary.Shadowshot,
                melee: NodeStepSummary.SnareBomb,
                passives: [
                    NodeStepSummary.KeenScout,
                    NodeStepSummary.Deadfall,
                    NodeStepSummary.VanishingStep,
                ],
            },
            bottom: {
                super: NodeStepSummary.Shadowshot,
                melee: NodeStepSummary.VanishInSmoke,
                passives: [
                    NodeStepSummary.Lockdown,
                    NodeStepSummary.CombatProvision,
                    NodeStepSummary.MoebiusQuiver,
                ],
            },
            middle: {
                super: NodeStepSummary.SpectralBlades,
                melee: NodeStepSummary.CorrosiveSmoke,
                passives: [
                    NodeStepSummary.FlawlessExecution,
                    NodeStepSummary.ShatteringStrike,
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
                super: NodeStepSummary.SentinelShield,
                melee: NodeStepSummary.DefensiveStrike,
                passives: [
                    NodeStepSummary.RallyingForce,
                    NodeStepSummary.TurnTheTide,
                    NodeStepSummary.WardOfDawn,
                ],
            },
            bottom: {
                super: NodeStepSummary.SentinelShield,
                melee: NodeStepSummary.ShieldBash,
                passives: [
                    NodeStepSummary.SuperiorArsenal,
                    NodeStepSummary.InTheTrenches,
                    NodeStepSummary.SecondShield,
                ],
            },
            middle: {
                super: NodeStepSummary.BannerShield,
                melee: NodeStepSummary.TacticalStrike,
                passives: [
                    NodeStepSummary.ControlledDemolition,
                    NodeStepSummary.Resupply,
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
                super: NodeStepSummary.HammerOfSol,
                melee: NodeStepSummary.HammerStrike,
                passives: [
                    NodeStepSummary.TemperedMetal,
                    NodeStepSummary.ExplosivePyre,
                    NodeStepSummary.VulcansRage,
                ],
            },
            bottom: {
                super: NodeStepSummary.HammerOfSol,
                melee: NodeStepSummary.MortarBlast,
                passives: [
                    NodeStepSummary.SolInvictus,
                    NodeStepSummary.SunWarrior,
                    NodeStepSummary.EndlessSiege,
                ],
            },
            middle: {
                super: NodeStepSummary.BurningMaul,
                melee: NodeStepSummary.ThrowingHammer,
                passives: [
                    NodeStepSummary.TirelessWarrior,
                    NodeStepSummary.RoaringFlames,
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
                super: NodeStepSummary.FistsOfHavoc,
                melee: NodeStepSummary.SeismicStrike,
                passives: [
                    NodeStepSummary.Aftershocks,
                    NodeStepSummary.Magnitude,
                    NodeStepSummary.TerminalVelocity,
                ],
            },
            bottom: {
                super: NodeStepSummary.FistsOfHavoc,
                melee: NodeStepSummary.FrontalAssault,
                passives: [
                    NodeStepSummary.Reversal,
                    NodeStepSummary.Knockout,
                    NodeStepSummary.Trample,
                ],
            },
            middle: {
                super: NodeStepSummary.Thundercrash,
                melee: NodeStepSummary.BallisticSlam,
                passives: [
                    NodeStepSummary.ImpactConversion,
                    NodeStepSummary.InertiaOverride,
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
                super: NodeStepSummary.ArcStaff,
                melee: NodeStepSummary.CombinationBlow,
                passives: [
                    NodeStepSummary.CombatFlow,
                    NodeStepSummary.DeadlyReach,
                    NodeStepSummary.LethalCurrent,
                ],
            },
            bottom: {
                super: NodeStepSummary.ArcStaff,
                melee: NodeStepSummary.DisorientingBlow,
                passives: [
                    NodeStepSummary.FocusedBreathing,
                    NodeStepSummary.CombatMeditation,
                    NodeStepSummary.LightningReflexes,
                ],
            },
            middle: {
                super: NodeStepSummary.WhirlwindGuard,
                melee: NodeStepSummary.TempestStrike,
                passives: [NodeStepSummary.LightningWeave, NodeStepSummary.EbbAndFlow],
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
                super: NodeStepSummary.GoldenGun,
                melee: NodeStepSummary.ProximityExplosiveKnife,
                passives: [
                    NodeStepSummary.ChainsOfWoe,
                    NodeStepSummary.Deadshot,
                    NodeStepSummary.SixShooter,
                ],
            },
            bottom: {
                super: NodeStepSummary.GoldenGun,
                melee: NodeStepSummary.WeightedKnife,
                passives: [
                    NodeStepSummary.PracticeMakesPerfect,
                    NodeStepSummary.KnockEmDown,
                    NodeStepSummary.LineEmUp,
                ],
            },
            middle: {
                super: NodeStepSummary.BladeBarrage,
                melee: NodeStepSummary.KnifeTrick,
                passives: [
                    NodeStepSummary.PlayingWithFire,
                    NodeStepSummary.TheBurningEdge,
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
                super: NodeStepSummary.NovaBomb,
                melee: NodeStepSummary.EntropicPull,
                passives: [
                    NodeStepSummary.ChaosAccelerant,
                    NodeStepSummary.Bloom,
                    NodeStepSummary.Cataclysm,
                ],
            },
            bottom: {
                super: NodeStepSummary.NovaBomb,
                melee: NodeStepSummary.Devour,
                passives: [
                    NodeStepSummary.FeedTheVoid,
                    NodeStepSummary.Insatiable,
                    NodeStepSummary.Vortex,
                ],
            },
            middle: {
                super: NodeStepSummary.NovaWarp,
                melee: NodeStepSummary.AtomicBreach,
                passives: [
                    NodeStepSummary.HandheldSupernova,
                    NodeStepSummary.DarkMatter,
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
export const allMeleeNodes = Object.values(subclassNodes).flatMap((s) => Object.values(s.trees).map((t) => t.melee));
export const allGrenadeNodes = [
    ...new Set(Object.values(subclassNodes).flatMap((s) => s.grenades)),
];
export const allClassAbilityNodes = [
    ...new Set(Object.values(subclassNodes).flatMap((s) => s.classAbilities)),
];
export const allJumpNodes = [
    ...new Set(Object.values(subclassNodes).flatMap((s) => s.jumps)),
];
