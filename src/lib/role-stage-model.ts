import { dimensionIds, getStageProfile, stageIds, type CapabilityDimensionId } from './capability-model';
import { b, engineeringEvidence, roleCraft, tiers, type ResponsibilityTier } from '../content/role-stages/catalog';
import { facetDefinitions, hasTaxonomyId, pick, type Bilingual, type Locale } from './taxonomy';

export type { ResponsibilityTier };
export interface RoleStandard { id: string; text: string; evidence: string; capabilities: string[] }
export interface RoleStageProfile {
  id: string;
  roleId: string;
  tier: ResponsibilityTier;
  name: string;
  summary: string;
  professionalEvidence: string[];
  dimensions: Record<CapabilityDimensionId, RoleStandard[]>;
}

interface TierFrame {
  scope: Bilingual;
  compare: Bilingual;
  verify: Bilingual;
  influence: Bilingual;
  boundary: Bilingual;
  learning: Bilingual;
  thinking: Bilingual;
  drive: Bilingual;
  resilience: Bilingual;
  evidence: Bilingual;
}
export const tierFrames: Record<ResponsibilityTier, TierFrame> = {
  entry: {
    scope: b('对明确任务的本人操作、检查与及时求助负责。', 'Own personal actions, checks, and timely requests for help on defined tasks.'),
    compare: b('解释采用的基础做法，识别一个可行替代及适用差异。', 'Explain the basic approach and recognize a feasible alternative and its conditions.'),
    verify: b('核验任务是否完成，报告错误与未知，不把团队整体结果归给自己。', 'Check task completion, report errors and unknowns, and do not claim the whole team result.'),
    influence: b('让协作者理解进展与阻碍，确认反馈是否落实。', 'Keep collaborators informed about progress and blockers and confirm feedback was applied.'),
    boundary: b('理解职责、隐私和升级边界；不要求招聘、绩效或组织设计经验。', 'Understand responsibility, privacy, and escalation boundaries; hiring, performance management, and organization design are not expected.'),
    learning: b('说明怎样把一个新知识用于任务，以及如何检查自己是否理解。', 'Explain how new knowledge was applied and how understanding was checked.'),
    thinking: b('区分事实、猜测与未知，复述要解决的问题并检查基本因果。', 'Separate facts, guesses, and unknowns, restate the problem, and check basic causal claims.'),
    drive: b('主动补足必要信息、完成检查，在遇到阻碍时提出具体问题。', 'Seek necessary information, complete checks, and ask specific questions when blocked.'),
    resilience: b('说明一次错误或受挫后的调整；不以忍受不合理压力作为韧性。', 'Explain an adjustment after an error or setback; resilience does not mean accepting unreasonable pressure.'),
    evidence: b('本人步骤、任务前后差异、检查记录和收到反馈后的变化。', 'Personal steps, before/after differences, checks, and changes after feedback.'),
  },
  independent: {
    scope: b('独立负责常见任务或模块，从澄清到验证形成闭环。', 'Own routine tasks or a component from clarification through validation.'),
    compare: b('在目标和约束下比较可行方案，说明选择及没有采用其他方案的原因。', 'Compare feasible options under goals and constraints and explain the choice and rejected alternatives.'),
    verify: b('说明可比基线、结果口径和观察周期，区分个人行动与共同产出。', 'Explain a comparable baseline, outcome definition, and observation window and separate personal action from shared output.'),
    influence: b('协调直接依赖，澄清承诺，帮助协作者完成共同任务。', 'Coordinate direct dependencies, clarify commitments, and help collaborators deliver shared work.'),
    boundary: b('在授权内作决定，遇到跨权限或持续风险时升级；支持同伴不等于承担完整人员管理。', 'Decide within authority and escalate cross-boundary or sustained risks; peer support is not full people management.'),
    learning: b('说明如何选择学习材料、验证应用，并修正不适用的经验。', 'Explain how learning sources were selected, application verified, and unsuitable experience corrected.'),
    thinking: b('把目标拆成可检查的假设，比较证据并解释结论的成立条件。', 'Break goals into testable hypotheses, compare evidence, and explain the conditions supporting a conclusion.'),
    drive: b('主动识别闭环缺口，安排验证和后续行动，不只完成被分配的步骤。', 'Identify gaps in closure and arrange validation and follow-up beyond assigned steps.'),
    resilience: b('复盘失败假设和恢复方式，展示下次任务中实际改变了什么。', 'Review failed assumptions and recovery and show what changed in the next task.'),
    evidence: b('独立判断、方案记录、验证口径、协作接口和闭环结果。', 'Independent judgment, option records, validation definitions, collaboration interfaces, and closed-loop outcomes.'),
  },
  senior: {
    scope: b('承担复杂或模糊问题，协调关键依赖并帮助他人独立负责。', 'Own complex or ambiguous problems, coordinate key dependencies, and enable others to own work.'),
    compare: b('比较多条合理路径、机会成本与反例；说明判断为何适用于当前约束。', 'Compare plausible paths, opportunity costs, and counterexamples and explain fit to current constraints.'),
    verify: b('验证结果、负面影响和其他解释，提炼能迁移又有边界的经验。', 'Validate outcomes, adverse effects, and alternative explanations and extract transferable but bounded insights.'),
    influence: b('处理跨角色分歧，推进决策并通过评审、辅导或共同实践扩大作用。', 'Resolve cross-role disagreement, move decisions forward, and expand impact through review, coaching, or shared practice.'),
    boundary: b('说明协调权限和升级路径；带教与专业影响不默认带有人事决策权。', 'Explain coordination authority and escalation paths; mentoring and craft influence do not imply personnel authority.'),
    learning: b('把新方法迁移到不同情境，用反证修正已有判断。', 'Transfer methods across contexts and revise judgment using counterevidence.'),
    thinking: b('在模糊问题中建立结构，检验替代解释，识别真正影响决策的未知。', 'Structure ambiguous problems, test alternative explanations, and identify unknowns that change decisions.'),
    drive: b('主动识别重要问题并建立验证节奏，而不只是扩大工作量。', 'Identify consequential problems and establish validation cadence rather than simply increase workload.'),
    resilience: b('在受挫后调整目标、方法或协作方式，验证改进是否持续。', 'Adjust goals, methods, or collaboration after setbacks and verify sustained improvement.'),
    evidence: b('复杂约束、决策过程、本人关键行动、反证及后续复用变化。', 'Complex constraints, decisions, critical personal actions, counterevidence, and changes in later reuse.'),
  },
  expert: {
    scope: b('对关键专业领域负责，通过领域判断和共享实践扩大影响，不以直属人数衡量。', 'Own a critical professional domain and scale impact through judgment and shared practice, not direct-report count.'),
    compare: b('比较长期方向、领域替代路径和迁移成本；缺少外部对标时建立自身基线。', 'Compare long-term directions, domain alternatives, and migration costs; establish internal baselines when external comparisons are unavailable.'),
    verify: b('检查领域方法的持续采用、跨情境效果和代价，说明本人不可替代的判断在哪里。', 'Check sustained adoption, cross-context effects, and costs and explain the distinctive personal judgment.'),
    influence: b('通过跨团队机制、专业标准和负责人培养形成可持续影响。', 'Build sustained influence through cross-team mechanisms, professional standards, and developing owners.'),
    boundary: b('明确专业主张的授权与组织依赖，不把业务环境红利全部当成个人成果。', 'Make authority and organizational dependencies explicit and do not claim environmental advantages as personal achievement.'),
    learning: b('推动领域方法更新，明确旧经验失效的条件和验证新方向的办法。', 'Renew domain methods and explain when prior experience fails and how new directions are validated.'),
    thinking: b('提炼领域模型，识别局部最优与系统效应，并说明方法迁移的限制。', 'Develop domain models, recognize local optima and system effects, and explain limits of method transfer.'),
    drive: b('发现长期关键问题，推进必要但不显眼的建设，并设定停止或修正条件。', 'Identify consequential long-term problems, advance necessary unglamorous work, and set stopping or revision criteria.'),
    resilience: b('面对重大判断失误能公开修正，并帮助相关团队恢复与学习。', 'Correct consequential judgment errors openly and help affected teams recover and learn.'),
    evidence: b('领域基线、关键判断、采用与迁移记录、长期结果和个人归因边界。', 'Domain baselines, critical judgments, adoption and transfer records, long-term outcomes, and attribution limits.'),
  },
  manager: {
    scope: b('对团队结果与人才建设完整负责，以实际授权而非头衔判断范围。', 'Own team outcomes and people development within the actual mandate, not merely the title.'),
    compare: b('比较业务优先级、能力配置、交付容量与人员发展之间的取舍。', 'Compare business priorities, skill allocation, delivery capacity, and people development trade-offs.'),
    verify: b('验证团队结果和人才机制的效果，说明本人管理动作、成员贡献与持续成本。', 'Verify team outcomes and people practices and explain personal management actions, member contributions, and ongoing costs.'),
    influence: b('通过招聘、绩效、辅导、授权和反馈，使成员能独立承担工作。', 'Enable ownership through hiring, performance management, coaching, delegation, and feedback.'),
    boundary: b('公平使用管理权限，明确人员问题升级渠道；不能用本人代做替代团队能力建设。', 'Use managerial authority fairly and clarify escalation; personally doing the work cannot replace team capability building.'),
    learning: b('从团队反馈和结果中发现管理假设错误，验证机制调整。', 'Discover mistaken management assumptions through team feedback and results and validate changes.'),
    thinking: b('区分人员、流程、目标和资源问题，用证据检查管理干预的因果作用。', 'Distinguish people, process, goal, and resource problems and examine the causal effects of management interventions.'),
    drive: b('主动处理人才与交付的系统性缺口，为成员争取必要资源与清晰目标。', 'Address systemic talent and delivery gaps and secure necessary resources and clear goals for members.'),
    resilience: b('在团队失败后承担管理责任、止损和恢复，避免把代价只转给成员。', 'Own management responsibility, containment, and recovery after team failure rather than shift all costs to members.'),
    evidence: b('授权记录、招聘/发展决策、团队结果、成员变化、反馈与机制前后对比。', 'Delegation, hiring/development decisions, team outcomes, member growth, feedback, and before/after mechanisms.'),
  },
  organization: {
    scope: b('通过管理者对多团队或组织能力负责，明确业务组合和实际决策权限。', 'Own multi-team or organizational capability through managers with explicit portfolio and decision rights.'),
    compare: b('比较业务组合、组织方案、资源流向与长期能力，核验各方利益和约束。', 'Compare portfolios, organization options, resource flows, and long-term capability and examine stakeholder interests and constraints.'),
    verify: b('检查跨周期组织结果、管理质量、继任与负面影响，区分机制效用和外部环境。', 'Inspect organizational outcomes across cycles, management quality, succession, and adverse effects and separate mechanisms from external conditions.'),
    influence: b('培养、评估和授权管理者，校准组织边界、管理质量和继任机制。', 'Develop, assess, and empower managers and calibrate organizational boundaries, management quality, and succession.'),
    boundary: b('建立信息上行、利益冲突和重大决定复核机制，不靠常态越级维持运转。', 'Establish upward information flow, conflict-of-interest controls, and decision review rather than routine bypassing.'),
    learning: b('把跨团队复盘和外部变化转为组织实践，检查是否发生真实采用。', 'Turn cross-team reviews and external changes into organizational practice and check actual adoption.'),
    thinking: b('识别组织反馈回路、激励和时滞，用反证修正战略及组织假设。', 'Identify organizational feedback loops, incentives, and delays and use counterevidence to revise strategic and organizational assumptions.'),
    drive: b('提前识别组织能力缺口，建设负责人梯队并为长期问题配置资源。', 'Anticipate capability gaps, build leadership pipelines, and resource long-term problems.'),
    resilience: b('在危机和方向失误中承担纠偏责任，维护信息真实与组织恢复能力。', 'Own correction during crises and strategic errors and preserve truthful information and organizational recovery.'),
    evidence: b('组织与资源备选、经理成长记录、继任覆盖、多周期结果、反证及纠偏机制。', 'Organization/resource alternatives, manager development, succession coverage, multi-cycle outcomes, counterevidence, and correction mechanisms.'),
  },
};

function standard(id: string, text: Bilingual, evidence: Bilingual, capabilities: string[], locale: Locale): RoleStandard {
  return { id, text: pick(text, locale), evidence: pick(evidence, locale), capabilities };
}

export function getRoleStages(roleId: string, locale: Locale): RoleStageProfile[] {
  if (!facetDefinitions.roles.some(role => role.id === roleId)) throw new Error(`Unknown role: ${roleId}`);
  if (engineeringEvidence[roleId]) return stageIds.map((id, i) => {
    const stage = getStageProfile(id, locale);
    const tier = tiers[i];
    return {
      id, roleId, tier, name: stage.name, summary: stage.summary,
      professionalEvidence: engineeringEvidence[roleId].map(text => pick(text, locale)),
      dimensions: Object.fromEntries(dimensionIds.map(dim => [dim, stage.dimensions[dim].map(item => ({
        id: item.id, text: item.text, evidence: item.evidence ?? pick(tierFrames[tier].evidence, locale), capabilities: item.capabilities.map(cap => cap.id),
      }))])) as RoleStageProfile['dimensions'],
    };
  });
  const craft = roleCraft[roleId];
  return craft.stages.map((stage, index) => {
    const tier = roleId === 'manager' ? (index === 0 ? 'manager' : 'organization') : tiers[index];
    const frame = tierFrames[tier];
    const make = (id: string, text: Bilingual, caps: string[]) => standard(id, text, frame.evidence, caps, locale);
    return {
      id: `${roleId}-${tier}`, roleId, tier, name: pick(stage.name, locale), summary: pick(stage.outcome, locale),
      professionalEvidence: [pick(craft.artifacts, locale), pick(craft.risks, locale)],
      dimensions: {
        'business-results': [make('role-outcome', stage.outcome, ['value-direction.business-outcomes']), make('compare-options', frame.compare, ['value-direction.prioritization']), make('verify-outcomes', frame.verify, ['value-direction.metrics-causality'])],
        'domain-expertise': [make('role-craft', stage.craft, craft.capabilities), standard('craft-risk', b(`识别并核验岗位风险：${craft.risks.zh}。在实际责任内解释防护和升级。`, `Identify and verify role risks: ${craft.risks.en}. Explain controls and escalation within the actual mandate.`), craft.artifacts, craft.capabilities, locale), standard('craft-trace', b('使用岗位相关产物核验判断与行动，区分本人完成、评审与团队共同产出。', 'Use role-relevant artifacts to verify judgment and actions and distinguish personal execution, review, and team output.'), craft.artifacts, craft.capabilities, locale)],
        'team-influence': [make('role-scope', frame.scope, ['collaboration.communication']), make('enable-others', frame.influence, [tier === 'manager' || tier === 'organization' ? 'people-organization.team-design' : 'collaboration.communication']), make('authority-boundaries', frame.boundary, ['work-responsibility.boundaries'])],
        'human-competitive-advantage': [make('learning-transfer', frame.learning, ['learning-adaptation.learning-transfer']), make('self-direction', frame.drive, ['learning-adaptation.self-direction']), make('structured-thinking', frame.thinking, ['learning-adaptation.structured-reflection']), make('recovery-adjustment', frame.resilience, ['learning-adaptation.resilience-recovery'])],
      },
    };
  });
}

export function getRoleStage(roleId: string, stageId: string, locale: Locale): RoleStageProfile {
  const stage = getRoleStages(roleId, locale).find(item => item.id === stageId);
  if (!stage) throw new Error(`Stage ${stageId} does not belong to role ${roleId}`);
  return stage;
}

export function validateRoleStageModels(): string[] {
  const errors: string[] = [];
  for (const role of facetDefinitions.roles) {
    const zh = getRoleStages(role.id, 'zh-CN');
    const en = getRoleStages(role.id, 'en');
    if (zh.map(s => s.id).join('|') !== en.map(s => s.id).join('|')) errors.push(`${role.id}: bilingual stage mismatch`);
    if (new Set(zh.map(s => s.id)).size !== zh.length) errors.push(`${role.id}: duplicate stages`);
    for (const [locale, stages] of [['zh-CN', zh], ['en', en]] as const) for (const stage of stages) {
      for (const dim of dimensionIds) {
        const items = stage.dimensions[dim];
        if (items.length < 3 || items.length > 5) errors.push(`${role.id}/${stage.id}/${dim}: expected 3–5 standards`);
        for (const item of items) {
          if (!item.text.trim() || !item.evidence.trim()) errors.push(`${locale}/${stage.id}/${item.id}: incomplete standard`);
          for (const id of item.capabilities) if (!hasTaxonomyId('capabilities', id)) errors.push(`${stage.id}: invalid capability ${id}`);
        }
      }
    }
  }
  return errors;
}
