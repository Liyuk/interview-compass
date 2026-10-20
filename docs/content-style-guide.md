# Interview Compass question style guide / Interview Compass 题目写作规范

This guide defines how to write and review core bilingual questions. It describes evidence prompts, not model answers or a universal scoring standard. Existing excerpts below illustrate useful writing choices; none is labeled as a finished core question unless its record has `qualityTier: core` and `perspectiveReview: reviewed`.

本规范用于撰写和复核核心双语题目。它规定怎样呈现证据线索，不提供标准答案，也不声称存在适用于所有岗位的统一评分标准。下方现有题目摘录只用于说明值得借鉴的写法；除非记录同时标记 `qualityTier: core` 和 `perspectiveReview: reviewed`，否则不能称为完成核心审核。

## The question record / 题目记录

Each localized Markdown record uses the shared contract in `src/lib/content-model.ts`:

每种语言的 Markdown 题目都遵循 `src/lib/content-model.ts` 的字段契约：

| Field / 字段 | Core rule / 核心题要求 |
| --- | --- |
| `perspective` | `candidate`, `interviewer`, or `manager`; same for both locales / 中英文一致 |
| `perspectiveReview` | `reviewed` only after a person confirms who the prompt is for / 人工确认视角后才标 `reviewed` |
| `qualityTier` | `core` only after the entire bilingual item passes review; otherwise `extended` / 完成整道双语题审核后才标 `core` |
| `intent` | One judgment target with a concrete purpose / 只写一个判断目标 |
| `signals` | 3–4 observable evidence signals / 3–4 条可观察的证据线索 |
| `followUps` | 2–3 question-specific probes / 2–3 条针对本题的追问 |
| `weakAnswer` | One sentence describing a common evidence gap / 一句话描述常见的证据缺口 |
| `anchors` | One item for each level: `notPassing`, `passing`, `excellent`, `exceptional` / 四档各有一条本题专属锚点 |

The remaining record fields—capability, facets, provenance, relationships, and status—retain their existing meanings. Do not add answer, sample-answer, scorecard, or hiring-recommendation fields.

能力域、标签、来源、关联关系和发布状态沿用现有含义。不要新增答案、示范答案、评分卡或招聘结论字段。

## Writing each field / 各字段写法

### Intent / 考察意图

- Write one decision target. Prefer the Chinese frame **“判断回答者能否……”** and the English frame **“Assess whether the respondent can …”**; adjust grammar only when needed to keep the sentence natural.
- Name the capability or judgment being examined, not a list of topics.
- Tie the judgment to evidence the question can elicit. Avoid claims about personality or hidden traits.
- Do not copy the title and append a generic phrase such as “shows communication ability.” A reader should understand what this particular prompt distinguishes.
- 中英文各写一个判断目标。中文优先使用 **“判断回答者能否……”**，英文优先使用 **“Assess whether the respondent can …”**；只有为保证语句自然时才调整句式。
- 写清要观察的能力或判断，不要罗列主题。
- 把判断落到题目能够引出的证据上，不推断人格或无法观察的特质。
- 不要把标题后面机械加上“体现沟通能力”等通用句。读者应能看出这道题具体区分什么。

### Signals / 观察信号

- Write 3–4 behaviors or pieces of evidence that can be heard, seen, or checked in an answer.
- Describe distinctions that matter for this question: the respondent’s decision, evidence, alternatives, effect, or attribution where relevant.
- Avoid empty adjectives (“strategic,” “senior,” “strong communicator”) unless the observable behavior that supports them is stated.
- 中英文各写 3–4 条能从回答中听到、看到或核验的行为和证据。
- 写出本题真正要区分的内容，例如回答者的决定、证据、备选方案、效果或归因。
- 不要只写“有战略性”“足够资深”“沟通能力强”等形容词；如需使用，必须补上可观察的依据。

### Follow-ups / 追问

- Write 2–3 questions that depend on the prompt’s specific situation. Do not copy the main prompt as a follow-up.
- Let the probes deepen the evidence—for example, clarify the baseline, examine why an alternative was rejected, or verify what changed—when those dimensions fit the question.
- Avoid stock probes such as “what if the scale became ten times larger?” unless scale is material to this prompt.
- Never put a merged question inside a follow-up. Text beginning with `【` is a migration residue to repair, not a valid probe.
- 中英文各写 2–3 条依赖题目具体情境的追问，不要把主问题原样再问一次。
- 追问应逐步深入证据；可按题目需要核对基线、替代方案、结果变化等。
- 除非规模确实影响本题，否则不要套用“如果规模扩大十倍会怎样”之类的固定追问。
- 不要把合并进来的整道题塞进追问。以 `【` 开头的内容是待清理残留，不是有效追问。

### Weak answer / 常见弱回答

- Use one sentence to describe a likely evidence gap, not to prescribe the correct answer.
- Keep it specific to the question. Examples include asserting a result without a baseline, describing a team outcome without personal contribution, or naming a trade-off without explaining its effect.
- Do not shame the respondent or infer dishonesty from a thin answer. Missing detail is a reason to ask, not proof of intent.
- 用一句话描述常见的证据缺口，不要规定正确答案应该怎么说。
- 描述要贴合本题，例如只报结果却没有基线、把团队结果全归于自己，或只说有取舍但解释不出影响。
- 不贬低回答者，也不要把信息不足解释成不诚实。缺少细节意味着继续追问，不代表已经证明动机。

### Anchors / 四档锚点

- Write one distinct, question-specific observation for each level: 1 `notPassing`, 2 `passing`, 3 `excellent`, 4 `exceptional`.
- Separate the levels using evidence quality, reasoning, comparison, outcome, or defensible attribution that matters to this prompt—not longer and shorter versions of one generic rubric.
- Level 2 describes a credible baseline for the relevant question and scope. Level 3 adds stronger structure, trade-off reasoning, or reflection. Level 4 requires unusually strong, verifiable impact or practice within the stated responsibility; hypothetical skill alone does not prove an achieved result.
- These are evidence anchors for discussion, not automatic scores or a person-wide judgment. Calibrate them to role and responsibility.
- 每档写一条本题专属、彼此有区分的观察：1 `notPassing`、2 `passing`、3 `excellent`、4 `exceptional`。
- 用证据质量、推理、比较、结果或可辩护的归因区分档位；不要把同一段通用评分话术简单改成长短版本。
- 2 档说明在本题和相应责任范围内可信的基本证据；3 档体现更完整的结构、取舍或反思；4 档需要在该责任范围内有少见且可核验的影响或实践，只有假设推演不能证明已经取得的结果。
- 锚点用于讨论证据，不用于自动打分，也不构成对一个人的整体判断。请按岗位和责任范围校准。

### Perspective and tags / 视角与标签

- `candidate`: the prompt is for a person preparing to describe or reason through their own work. The question may be used for interview or promotion preparation.
- `interviewer`: the prompt is for someone designing or conducting an interview, gathering evidence, or evaluating the interview process. The wording should address that interviewer’s task.
- `manager`: the prompt is for someone leading a team or making a management decision, such as a performance conversation, promotion review, or team diagnosis.
- Assign the perspective from the expected reader/respondent and the work asked of them. A `hiring` scenario or a `manager` role tag alone does not establish perspective. Inferred assignments remain `perspectiveReview: inferred` until checked by a person.
- For core questions, `careerTracks` and `responsibilityScopes` each contain no more than two values. Keep only values that materially fit the question; do not tag the whole library with every track.
- `candidate`：题目面向准备讲述自身工作或进行专业推理的人，可用于面试或晋升准备。
- `interviewer`：题目面向设计或实施面试、收集证据、评估面试过程的人。题干要围绕面试官要完成的任务来写。
- `manager`：题目面向带团队或作管理决策的人，例如绩效沟通、晋升评审或团队诊断。
- 根据题目实际要求谁阅读、谁作答来判断视角。单有 `hiring` 场景或 `manager` 岗位标签不足以证明视角。规则推断的字段保持 `perspectiveReview: inferred`，人工核对后再改为 `reviewed`。
- 核心题的 `careerTracks` 和 `responsibilityScopes` 各最多两个值。只保留对这道题确实重要的范围，不要给整库贴满所有轨道。

### Bilingual parity and source / 双语对应与来源

- Draft the Chinese question and its evidence intent first, then write the English counterpart by meaning. If an English-language source is primary, preserve its meaning while recording the editorial basis; do not translate mechanically.
- Keep the number and order of signals and follow-ups aligned. Anchors must distinguish the same evidence levels in both languages. The English should sound natural while making the same claim.
- Do not add facts, metrics, sources, or outcomes that the record does not support. Preserve existing provenance. Use `original` only when the question is original; adapted or derived sources need their recorded URL.
- 先写中文题目和证据意图，再按含义写英文版本。如果主要依据是英文来源，也要保留原意并说明编辑依据，不做机械翻译。
- 信号和追问的数量、顺序要对应；锚点要在两种语言中区分相同的证据档位。英文应自然，但不能改变判断含义。
- 不补写记录中没有依据的事实、指标、来源或结果。保留来源信息；只有原创题目才使用 `original`，改编或衍生来源需保留 URL。

## Positive examples from the repository / 现有正例

These are concise excerpts from the current extended records. They demonstrate useful writing moves, not completed core reviews.

以下是当前 extended 题目中的简短摘录，展示可借鉴的写法，不代表这些题目已完成核心复核。

### 1. State the decision rule before the choice / 先写判断口径，再写选择

[`c-prioritization-top-three-stop-two`](../src/content/questions/zh-CN/c-prioritization-top-three-stop-two.md) asks for a project goal and ranking standard. Its signal says: **“States the goal, time range, and standard behind the ranking before giving the answer.”** The follow-ups then ask what evidence would change the ranking and when to stop investing. The Chinese and English versions have the same three signals and two follow-ups.

[`c-prioritization-top-three-stop-two`](../src/content/questions/zh-CN/c-prioritization-top-three-stop-two.md) 先要求说明项目目标和排序标准。观察信号写道：**“先说明排序所依据的目标、时间范围与标准，而不是直接报答案。”** 后续追问继续核实什么证据会改变排序，以及投入到什么程度可以停止。中英文都是三条信号、两条追问。

### 2. Make a claim falsifiable / 让判断有可反驳的依据

[`c-product-judgment-industry-leading-claim`](../src/content/questions/zh-CN/c-product-judgment-industry-leading-claim.md) asks for the comparison set, dimensions, and time. Its signals distinguish “ahead” from “different” and ask where the claim could be challenged. This turns a broad adjective into a claim that can be checked.

[`c-product-judgment-industry-leading-claim`](../src/content/questions/zh-CN/c-product-judgment-industry-leading-claim.md) 要求说明比较对象、维度和时间点。观察信号区分“领先”和“只是不同”，并追问判断最可能被反驳的地方。这让宽泛形容词落到可以核验的主张上。

### 3. Separate individual contribution from lasting effect / 区分个人贡献与持续效果

[`h-attribution-without-you`](../src/content/questions/zh-CN/h-attribution-without-you.md) separates a one-off result from reusable capability and asks which outcomes belong to the team. Its English signals preserve those same distinctions.

[`h-attribution-without-you`](../src/content/questions/zh-CN/h-attribution-without-you.md) 区分一次性结果和留下的可复用能力，并追问哪些成果应归于团队。英文观察信号保留了相同区分。

## Negative examples / 反例

The snippets below are illustrative anti-patterns, not excerpts from published records.

以下片段是示意反例，不是对现有已发布题目的引用。

| Anti-pattern / 反例 | Why it fails / 问题 |
| --- | --- |
| Intent: “考察你的沟通能力。” / “This question assesses communication skills.” | It names a broad trait but says what evidence or decision the prompt examines. / 只点出宽泛能力，没有说明本题要判断什么证据。 |
| Follow-up: `【缓存设计】如何选择缓存策略？` / `【Cache design】How do you choose a cache strategy?` | It contains a merged main question, not a follow-up. / 把合并残留的主问题塞进追问。 |
| “描述一次你处理团队冲突的经历。作为面试官，你会如何给候选人评分？” / “Describe a team conflict you handled. As the interviewer, how would you score the candidate?” | One item switches between candidate and interviewer; split or choose the actual perspective. / 同一道题在候选人和面试官之间切换，应拆分或确定真正视角。 |

## Review checklist / 复核清单

- [ ] Is there one clear judgment target?
- [ ] Are all 3–4 signals observable and relevant to this prompt?
- [ ] Are there 2–3 specific follow-ups that deepen the evidence?
- [ ] Does `weakAnswer` name one likely evidence gap without prescribing an answer?
- [ ] Does each of the four anchors distinguish this question at its responsibility scope?
- [ ] Does the wording match the selected perspective?
- [ ] Are Chinese and English meaning, sequence, and counts aligned?
- [ ] Are tags limited to the question’s real use, and are sources preserved?
- [ ] Is this genuinely ready for `core`, or should it remain `extended`?

- [ ] 是否只有一个清晰的判断目标？
- [ ] 3–4 条信号是否可观察，且与本题相关？
- [ ] 是否有 2–3 条能深入核实证据的具体追问？
- [ ] `weakAnswer` 是否只指出一个常见证据缺口，没有规定标准答案？
- [ ] 四档锚点是否在本题的责任范围内形成真实区分？
- [ ] 题干是否符合所选视角？
- [ ] 中英文含义、顺序和数量是否对应？
- [ ] 标签是否只覆盖题目真正适用的范围，来源是否保留？
- [ ] 这道题是否真的达到 `core`，还是应继续留在 `extended`？
