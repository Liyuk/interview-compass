# 第二轮题库相似题合并记录

复核对象：第二轮 500 道新增题。原先每组 5 道题共享同一个核心主问，只改变一个追问条件；这类差异适合作为同一道题的追问选项，不应占用 5 个独立题目 ID。串行复核后，每组保留 v1 主问，将五种追问情境收入同一题卡的 `followUps`，移除 v2–v5 中英题卡，并清理相关关系和来源台账。

合并 100 组；保留 100 道核心题；合并 400 个重复变体（中英双语共 800 个文件）。

## 每组保留题与合并追问

### NUMA本地性与线程迁移 / NUMA locality and thread migration
保留：`bulk1000-a-001-v1`；合并：`bulk1000-a-001-v2`、`bulk1000-a-001-v3`、`bulk1000-a-001-v4`、`bulk1000-a-001-v5`
- 如果输入规模扩大十倍且内存预算不变，你会优先调整哪项假设或设计？ / If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you revisit first?
- 如果旧版本客户端或依赖无法同步升级，你会如何维持兼容并界定退出时间？ / If older clients or dependencies cannot upgrade together, how would you preserve compatibility and define an exit date?
- 如果问题只在少数时间窗口出现且本地难以复现，你会先增加什么证据？ / If the issue appears only in a few time windows and is hard to reproduce locally, what evidence would you add first?
- 如果上线日期固定而验证时间减少，你会定义哪些发布门槛和回退条件？ / If the launch date is fixed and validation time shrinks, which release gates and rollback conditions would you define?
- 如果运行成本超出预算但核心可靠性目标不变，你会如何重新权衡？ / If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance the trade-offs?

### 虚拟内存与工作集抖动 / Virtual memory and working-set thrashing
保留：`bulk1000-a-002-v1`；合并：`bulk1000-a-002-v2`、`bulk1000-a-002-v3`、`bulk1000-a-002-v4`、`bulk1000-a-002-v5`
- 如果输入规模扩大十倍且内存预算不变，你会优先调整哪项假设或设计？ / If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you revisit first?
- 如果旧版本客户端或依赖无法同步升级，你会如何维持兼容并界定退出时间？ / If older clients or dependencies cannot upgrade together, how would you preserve compatibility and define an exit date?
- 如果问题只在少数时间窗口出现且本地难以复现，你会先增加什么证据？ / If the issue appears only in a few time windows and is hard to reproduce locally, what evidence would you add first?
- 如果上线日期固定而验证时间减少，你会定义哪些发布门槛和回退条件？ / If the launch date is fixed and validation time shrinks, which release gates and rollback conditions would you define?
- 如果运行成本超出预算但核心可靠性目标不变，你会如何重新权衡？ / If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance the trade-offs?

### TLS证书轮换与长连接 / TLS certificate rotation and long-lived connections
保留：`bulk1000-a-003-v1`；合并：`bulk1000-a-003-v2`、`bulk1000-a-003-v3`、`bulk1000-a-003-v4`、`bulk1000-a-003-v5`
- 如果输入规模扩大十倍且内存预算不变，你会优先调整哪项假设或设计？ / If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you revisit first?
- 如果旧版本客户端或依赖无法同步升级，你会如何维持兼容并界定退出时间？ / If older clients or dependencies cannot upgrade together, how would you preserve compatibility and define an exit date?
- 如果问题只在少数时间窗口出现且本地难以复现，你会先增加什么证据？ / If the issue appears only in a few time windows and is hard to reproduce locally, what evidence would you add first?
- 如果上线日期固定而验证时间减少，你会定义哪些发布门槛和回退条件？ / If the launch date is fixed and validation time shrinks, which release gates and rollback conditions would you define?
- 如果运行成本超出预算但核心可靠性目标不变，你会如何重新权衡？ / If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance the trade-offs?

### HTTP/3路径切换与连接迁移 / HTTP/3 path changes and connection migration
保留：`bulk1000-a-004-v1`；合并：`bulk1000-a-004-v2`、`bulk1000-a-004-v3`、`bulk1000-a-004-v4`、`bulk1000-a-004-v5`
- 如果输入规模扩大十倍且内存预算不变，你会优先调整哪项假设或设计？ / If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you revisit first?
- 如果旧版本客户端或依赖无法同步升级，你会如何维持兼容并界定退出时间？ / If older clients or dependencies cannot upgrade together, how would you preserve compatibility and define an exit date?
- 如果问题只在少数时间窗口出现且本地难以复现，你会先增加什么证据？ / If the issue appears only in a few time windows and is hard to reproduce locally, what evidence would you add first?
- 如果上线日期固定而验证时间减少，你会定义哪些发布门槛和回退条件？ / If the launch date is fixed and validation time shrinks, which release gates and rollback conditions would you define?
- 如果运行成本超出预算但核心可靠性目标不变，你会如何重新权衡？ / If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance the trade-offs?

### 文件系统写入顺序与崩溃持久性 / Filesystem write ordering and crash durability
保留：`bulk1000-a-005-v1`；合并：`bulk1000-a-005-v2`、`bulk1000-a-005-v3`、`bulk1000-a-005-v4`、`bulk1000-a-005-v5`
- 如果输入规模扩大十倍且内存预算不变，你会优先调整哪项假设或设计？ / If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you revisit first?
- 如果旧版本客户端或依赖无法同步升级，你会如何维持兼容并界定退出时间？ / If older clients or dependencies cannot upgrade together, how would you preserve compatibility and define an exit date?
- 如果问题只在少数时间窗口出现且本地难以复现，你会先增加什么证据？ / If the issue appears only in a few time windows and is hard to reproduce locally, what evidence would you add first?
- 如果上线日期固定而验证时间减少，你会定义哪些发布门槛和回退条件？ / If the launch date is fixed and validation time shrinks, which release gates and rollback conditions would you define?
- 如果运行成本超出预算但核心可靠性目标不变，你会如何重新权衡？ / If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance the trade-offs?

### 增量解析大型日志流 / Incremental parsing of large log streams
保留：`bulk1000-a-006-v1`；合并：`bulk1000-a-006-v2`、`bulk1000-a-006-v3`、`bulk1000-a-006-v4`、`bulk1000-a-006-v5`
- 如果输入规模扩大十倍且内存预算不变，你会优先调整哪项假设或设计？ / If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you revisit first?
- 如果旧版本客户端或依赖无法同步升级，你会如何维持兼容并界定退出时间？ / If older clients or dependencies cannot upgrade together, how would you preserve compatibility and define an exit date?
- 如果问题只在少数时间窗口出现且本地难以复现，你会先增加什么证据？ / If the issue appears only in a few time windows and is hard to reproduce locally, what evidence would you add first?
- 如果上线日期固定而验证时间减少，你会定义哪些发布门槛和回退条件？ / If the launch date is fixed and validation time shrinks, which release gates and rollback conditions would you define?
- 如果运行成本超出预算但核心可靠性目标不变，你会如何重新权衡？ / If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance the trade-offs?

### 有过期语义的并发映射 / Concurrent map with expiration semantics
保留：`bulk1000-a-007-v1`；合并：`bulk1000-a-007-v2`、`bulk1000-a-007-v3`、`bulk1000-a-007-v4`、`bulk1000-a-007-v5`
- 如果输入规模扩大十倍且内存预算不变，你会优先调整哪项假设或设计？ / If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you revisit first?
- 如果旧版本客户端或依赖无法同步升级，你会如何维持兼容并界定退出时间？ / If older clients or dependencies cannot upgrade together, how would you preserve compatibility and define an exit date?
- 如果问题只在少数时间窗口出现且本地难以复现，你会先增加什么证据？ / If the issue appears only in a few time windows and is hard to reproduce locally, what evidence would you add first?
- 如果上线日期固定而验证时间减少，你会定义哪些发布门槛和回退条件？ / If the launch date is fixed and validation time shrinks, which release gates and rollback conditions would you define?
- 如果运行成本超出预算但核心可靠性目标不变，你会如何重新权衡？ / If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance the trade-offs?

### 流式合并重叠区间 / Streaming merge of overlapping intervals
保留：`bulk1000-a-008-v1`；合并：`bulk1000-a-008-v2`、`bulk1000-a-008-v3`、`bulk1000-a-008-v4`、`bulk1000-a-008-v5`
- 如果输入规模扩大十倍且内存预算不变，你会优先调整哪项假设或设计？ / If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you revisit first?
- 如果旧版本客户端或依赖无法同步升级，你会如何维持兼容并界定退出时间？ / If older clients or dependencies cannot upgrade together, how would you preserve compatibility and define an exit date?
- 如果问题只在少数时间窗口出现且本地难以复现，你会先增加什么证据？ / If the issue appears only in a few time windows and is hard to reproduce locally, what evidence would you add first?
- 如果上线日期固定而验证时间减少，你会定义哪些发布门槛和回退条件？ / If the launch date is fixed and validation time shrinks, which release gates and rollback conditions would you define?
- 如果运行成本超出预算但核心可靠性目标不变，你会如何重新权衡？ / If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance the trade-offs?

### 带取消的有界重试器 / Bounded retry utility with cancellation
保留：`bulk1000-a-009-v1`；合并：`bulk1000-a-009-v2`、`bulk1000-a-009-v3`、`bulk1000-a-009-v4`、`bulk1000-a-009-v5`
- 如果输入规模扩大十倍且内存预算不变，你会优先调整哪项假设或设计？ / If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you revisit first?
- 如果旧版本客户端或依赖无法同步升级，你会如何维持兼容并界定退出时间？ / If older clients or dependencies cannot upgrade together, how would you preserve compatibility and define an exit date?
- 如果问题只在少数时间窗口出现且本地难以复现，你会先增加什么证据？ / If the issue appears only in a few time windows and is hard to reproduce locally, what evidence would you add first?
- 如果上线日期固定而验证时间减少，你会定义哪些发布门槛和回退条件？ / If the launch date is fixed and validation time shrinks, which release gates and rollback conditions would you define?
- 如果运行成本超出预算但核心可靠性目标不变，你会如何重新权衡？ / If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance the trade-offs?

### 只有高分位变慢的请求 / Requests slowing only at high percentiles
保留：`bulk1000-a-010-v1`；合并：`bulk1000-a-010-v2`、`bulk1000-a-010-v3`、`bulk1000-a-010-v4`、`bulk1000-a-010-v5`
- 如果输入规模扩大十倍且内存预算不变，你会优先调整哪项假设或设计？ / If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you revisit first?
- 如果旧版本客户端或依赖无法同步升级，你会如何维持兼容并界定退出时间？ / If older clients or dependencies cannot upgrade together, how would you preserve compatibility and define an exit date?
- 如果问题只在少数时间窗口出现且本地难以复现，你会先增加什么证据？ / If the issue appears only in a few time windows and is hard to reproduce locally, what evidence would you add first?
- 如果上线日期固定而验证时间减少，你会定义哪些发布门槛和回退条件？ / If the launch date is fixed and validation time shrinks, which release gates and rollback conditions would you define?
- 如果运行成本超出预算但核心可靠性目标不变，你会如何重新权衡？ / If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance the trade-offs?

### 偶发内存泄漏与对象保留 / Intermittent memory leak and object retention
保留：`bulk1000-a-011-v1`；合并：`bulk1000-a-011-v2`、`bulk1000-a-011-v3`、`bulk1000-a-011-v4`、`bulk1000-a-011-v5`
- 如果输入规模扩大十倍且内存预算不变，你会优先调整哪项假设或设计？ / If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you revisit first?
- 如果旧版本客户端或依赖无法同步升级，你会如何维持兼容并界定退出时间？ / If older clients or dependencies cannot upgrade together, how would you preserve compatibility and define an exit date?
- 如果问题只在少数时间窗口出现且本地难以复现，你会先增加什么证据？ / If the issue appears only in a few time windows and is hard to reproduce locally, what evidence would you add first?
- 如果上线日期固定而验证时间减少，你会定义哪些发布门槛和回退条件？ / If the launch date is fixed and validation time shrinks, which release gates and rollback conditions would you define?
- 如果运行成本超出预算但核心可靠性目标不变，你会如何重新权衡？ / If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance the trade-offs?

### 只在并行测试中的不稳定失败 / Flaky failures only in parallel tests
保留：`bulk1000-a-012-v1`；合并：`bulk1000-a-012-v2`、`bulk1000-a-012-v3`、`bulk1000-a-012-v4`、`bulk1000-a-012-v5`
- 如果输入规模扩大十倍且内存预算不变，你会优先调整哪项假设或设计？ / If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you revisit first?
- 如果旧版本客户端或依赖无法同步升级，你会如何维持兼容并界定退出时间？ / If older clients or dependencies cannot upgrade together, how would you preserve compatibility and define an exit date?
- 如果问题只在少数时间窗口出现且本地难以复现，你会先增加什么证据？ / If the issue appears only in a few time windows and is hard to reproduce locally, what evidence would you add first?
- 如果上线日期固定而验证时间减少，你会定义哪些发布门槛和回退条件？ / If the launch date is fixed and validation time shrinks, which release gates and rollback conditions would you define?
- 如果运行成本超出预算但核心可靠性目标不变，你会如何重新权衡？ / If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance the trade-offs?

### 跨服务请求只在峰值丢失 / Cross-service requests lost only at peak load
保留：`bulk1000-a-013-v1`；合并：`bulk1000-a-013-v2`、`bulk1000-a-013-v3`、`bulk1000-a-013-v4`、`bulk1000-a-013-v5`
- 如果输入规模扩大十倍且内存预算不变，你会优先调整哪项假设或设计？ / If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you revisit first?
- 如果旧版本客户端或依赖无法同步升级，你会如何维持兼容并界定退出时间？ / If older clients or dependencies cannot upgrade together, how would you preserve compatibility and define an exit date?
- 如果问题只在少数时间窗口出现且本地难以复现，你会先增加什么证据？ / If the issue appears only in a few time windows and is hard to reproduce locally, what evidence would you add first?
- 如果上线日期固定而验证时间减少，你会定义哪些发布门槛和回退条件？ / If the launch date is fixed and validation time shrinks, which release gates and rollback conditions would you define?
- 如果运行成本超出预算但核心可靠性目标不变，你会如何重新权衡？ / If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance the trade-offs?

### 多租户作业队列的公平性 / Fairness in a multi-tenant job queue
保留：`bulk1000-a-014-v1`；合并：`bulk1000-a-014-v2`、`bulk1000-a-014-v3`、`bulk1000-a-014-v4`、`bulk1000-a-014-v5`
- 如果输入规模扩大十倍且内存预算不变，你会优先调整哪项假设或设计？ / If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you revisit first?
- 如果旧版本客户端或依赖无法同步升级，你会如何维持兼容并界定退出时间？ / If older clients or dependencies cannot upgrade together, how would you preserve compatibility and define an exit date?
- 如果问题只在少数时间窗口出现且本地难以复现，你会先增加什么证据？ / If the issue appears only in a few time windows and is hard to reproduce locally, what evidence would you add first?
- 如果上线日期固定而验证时间减少，你会定义哪些发布门槛和回退条件？ / If the launch date is fixed and validation time shrinks, which release gates and rollback conditions would you define?
- 如果运行成本超出预算但核心可靠性目标不变，你会如何重新权衡？ / If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance the trade-offs?

### 热键下的读写隔离 / Read/write isolation under hot keys
保留：`bulk1000-a-015-v1`；合并：`bulk1000-a-015-v2`、`bulk1000-a-015-v3`、`bulk1000-a-015-v4`、`bulk1000-a-015-v5`
- 如果输入规模扩大十倍且内存预算不变，你会优先调整哪项假设或设计？ / If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you revisit first?
- 如果旧版本客户端或依赖无法同步升级，你会如何维持兼容并界定退出时间？ / If older clients or dependencies cannot upgrade together, how would you preserve compatibility and define an exit date?
- 如果问题只在少数时间窗口出现且本地难以复现，你会先增加什么证据？ / If the issue appears only in a few time windows and is hard to reproduce locally, what evidence would you add first?
- 如果上线日期固定而验证时间减少，你会定义哪些发布门槛和回退条件？ / If the launch date is fixed and validation time shrinks, which release gates and rollback conditions would you define?
- 如果运行成本超出预算但核心可靠性目标不变，你会如何重新权衡？ / If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance the trade-offs?

### 可审计事件日志与重放 / Auditable event log and replay
保留：`bulk1000-a-016-v1`；合并：`bulk1000-a-016-v2`、`bulk1000-a-016-v3`、`bulk1000-a-016-v4`、`bulk1000-a-016-v5`
- 如果输入规模扩大十倍且内存预算不变，你会优先调整哪项假设或设计？ / If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you revisit first?
- 如果旧版本客户端或依赖无法同步升级，你会如何维持兼容并界定退出时间？ / If older clients or dependencies cannot upgrade together, how would you preserve compatibility and define an exit date?
- 如果问题只在少数时间窗口出现且本地难以复现，你会先增加什么证据？ / If the issue appears only in a few time windows and is hard to reproduce locally, what evidence would you add first?
- 如果上线日期固定而验证时间减少，你会定义哪些发布门槛和回退条件？ / If the launch date is fixed and validation time shrinks, which release gates and rollback conditions would you define?
- 如果运行成本超出预算但核心可靠性目标不变，你会如何重新权衡？ / If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance the trade-offs?

### 区域故障下的读写策略 / Read/write policy during a regional outage
保留：`bulk1000-a-017-v1`；合并：`bulk1000-a-017-v2`、`bulk1000-a-017-v3`、`bulk1000-a-017-v4`、`bulk1000-a-017-v5`
- 如果输入规模扩大十倍且内存预算不变，你会优先调整哪项假设或设计？ / If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you revisit first?
- 如果旧版本客户端或依赖无法同步升级，你会如何维持兼容并界定退出时间？ / If older clients or dependencies cannot upgrade together, how would you preserve compatibility and define an exit date?
- 如果问题只在少数时间窗口出现且本地难以复现，你会先增加什么证据？ / If the issue appears only in a few time windows and is hard to reproduce locally, what evidence would you add first?
- 如果上线日期固定而验证时间减少，你会定义哪些发布门槛和回退条件？ / If the launch date is fixed and validation time shrinks, which release gates and rollback conditions would you define?
- 如果运行成本超出预算但核心可靠性目标不变，你会如何重新权衡？ / If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance the trade-offs?

### 长连接实时协作的背压 / Backpressure in real-time collaboration
保留：`bulk1000-a-018-v1`；合并：`bulk1000-a-018-v2`、`bulk1000-a-018-v3`、`bulk1000-a-018-v4`、`bulk1000-a-018-v5`
- 如果输入规模扩大十倍且内存预算不变，你会优先调整哪项假设或设计？ / If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you revisit first?
- 如果旧版本客户端或依赖无法同步升级，你会如何维持兼容并界定退出时间？ / If older clients or dependencies cannot upgrade together, how would you preserve compatibility and define an exit date?
- 如果问题只在少数时间窗口出现且本地难以复现，你会先增加什么证据？ / If the issue appears only in a few time windows and is hard to reproduce locally, what evidence would you add first?
- 如果上线日期固定而验证时间减少，你会定义哪些发布门槛和回退条件？ / If the launch date is fixed and validation time shrinks, which release gates and rollback conditions would you define?
- 如果运行成本超出预算但核心可靠性目标不变，你会如何重新权衡？ / If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance the trade-offs?

### Monorepo中的所有权与发布 / Ownership and releases in a monorepo
保留：`bulk1000-a-019-v1`；合并：`bulk1000-a-019-v2`、`bulk1000-a-019-v3`、`bulk1000-a-019-v4`、`bulk1000-a-019-v5`
- 如果输入规模扩大十倍且内存预算不变，你会优先调整哪项假设或设计？ / If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you revisit first?
- 如果旧版本客户端或依赖无法同步升级，你会如何维持兼容并界定退出时间？ / If older clients or dependencies cannot upgrade together, how would you preserve compatibility and define an exit date?
- 如果问题只在少数时间窗口出现且本地难以复现，你会先增加什么证据？ / If the issue appears only in a few time windows and is hard to reproduce locally, what evidence would you add first?
- 如果上线日期固定而验证时间减少，你会定义哪些发布门槛和回退条件？ / If the launch date is fixed and validation time shrinks, which release gates and rollback conditions would you define?
- 如果运行成本超出预算但核心可靠性目标不变，你会如何重新权衡？ / If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance the trade-offs?

### 不可信变更的CI隔离 / CI isolation for untrusted changes
保留：`bulk1000-a-020-v1`；合并：`bulk1000-a-020-v2`、`bulk1000-a-020-v3`、`bulk1000-a-020-v4`、`bulk1000-a-020-v5`
- 如果输入规模扩大十倍且内存预算不变，你会优先调整哪项假设或设计？ / If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you revisit first?
- 如果旧版本客户端或依赖无法同步升级，你会如何维持兼容并界定退出时间？ / If older clients or dependencies cannot upgrade together, how would you preserve compatibility and define an exit date?
- 如果问题只在少数时间窗口出现且本地难以复现，你会先增加什么证据？ / If the issue appears only in a few time windows and is hard to reproduce locally, what evidence would you add first?
- 如果上线日期固定而验证时间减少，你会定义哪些发布门槛和回退条件？ / If the launch date is fixed and validation time shrinks, which release gates and rollback conditions would you define?
- 如果运行成本超出预算但核心可靠性目标不变，你会如何重新权衡？ / If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance the trade-offs?

### 灰度发布中的配置漂移 / Configuration drift during progressive delivery
保留：`bulk1000-a-021-v1`；合并：`bulk1000-a-021-v2`、`bulk1000-a-021-v3`、`bulk1000-a-021-v4`、`bulk1000-a-021-v5`
- 如果输入规模扩大十倍且内存预算不变，你会优先调整哪项假设或设计？ / If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you revisit first?
- 如果旧版本客户端或依赖无法同步升级，你会如何维持兼容并界定退出时间？ / If older clients or dependencies cannot upgrade together, how would you preserve compatibility and define an exit date?
- 如果问题只在少数时间窗口出现且本地难以复现，你会先增加什么证据？ / If the issue appears only in a few time windows and is hard to reproduce locally, what evidence would you add first?
- 如果上线日期固定而验证时间减少，你会定义哪些发布门槛和回退条件？ / If the launch date is fixed and validation time shrinks, which release gates and rollback conditions would you define?
- 如果运行成本超出预算但核心可靠性目标不变，你会如何重新权衡？ / If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance the trade-offs?

### 检索数据删除的传播 / Propagation of deletion through retrieval systems
保留：`bulk1000-a-022-v1`；合并：`bulk1000-a-022-v2`、`bulk1000-a-022-v3`、`bulk1000-a-022-v4`、`bulk1000-a-022-v5`
- 如果输入规模扩大十倍且内存预算不变，你会优先调整哪项假设或设计？ / If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you revisit first?
- 如果旧版本客户端或依赖无法同步升级，你会如何维持兼容并界定退出时间？ / If older clients or dependencies cannot upgrade together, how would you preserve compatibility and define an exit date?
- 如果问题只在少数时间窗口出现且本地难以复现，你会先增加什么证据？ / If the issue appears only in a few time windows and is hard to reproduce locally, what evidence would you add first?
- 如果上线日期固定而验证时间减少，你会定义哪些发布门槛和回退条件？ / If the launch date is fixed and validation time shrinks, which release gates and rollback conditions would you define?
- 如果运行成本超出预算但核心可靠性目标不变，你会如何重新权衡？ / If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance the trade-offs?

### 工具调用权限随上下文变化 / Tool permissions that vary with context
保留：`bulk1000-a-023-v1`；合并：`bulk1000-a-023-v2`、`bulk1000-a-023-v3`、`bulk1000-a-023-v4`、`bulk1000-a-023-v5`
- 如果输入规模扩大十倍且内存预算不变，你会优先调整哪项假设或设计？ / If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you revisit first?
- 如果旧版本客户端或依赖无法同步升级，你会如何维持兼容并界定退出时间？ / If older clients or dependencies cannot upgrade together, how would you preserve compatibility and define an exit date?
- 如果问题只在少数时间窗口出现且本地难以复现，你会先增加什么证据？ / If the issue appears only in a few time windows and is hard to reproduce locally, what evidence would you add first?
- 如果上线日期固定而验证时间减少，你会定义哪些发布门槛和回退条件？ / If the launch date is fixed and validation time shrinks, which release gates and rollback conditions would you define?
- 如果运行成本超出预算但核心可靠性目标不变，你会如何重新权衡？ / If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance the trade-offs?

### 评估集泄漏与线上退化 / Evaluation leakage and online regression
保留：`bulk1000-a-024-v1`；合并：`bulk1000-a-024-v2`、`bulk1000-a-024-v3`、`bulk1000-a-024-v4`、`bulk1000-a-024-v5`
- 如果输入规模扩大十倍且内存预算不变，你会优先调整哪项假设或设计？ / If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you revisit first?
- 如果旧版本客户端或依赖无法同步升级，你会如何维持兼容并界定退出时间？ / If older clients or dependencies cannot upgrade together, how would you preserve compatibility and define an exit date?
- 如果问题只在少数时间窗口出现且本地难以复现，你会先增加什么证据？ / If the issue appears only in a few time windows and is hard to reproduce locally, what evidence would you add first?
- 如果上线日期固定而验证时间减少，你会定义哪些发布门槛和回退条件？ / If the launch date is fixed and validation time shrinks, which release gates and rollback conditions would you define?
- 如果运行成本超出预算但核心可靠性目标不变，你会如何重新权衡？ / If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance the trade-offs?

### 模型输出的不确定性边界 / Uncertainty boundaries in model output
保留：`bulk1000-a-025-v1`；合并：`bulk1000-a-025-v2`、`bulk1000-a-025-v3`、`bulk1000-a-025-v4`、`bulk1000-a-025-v5`
- 如果输入规模扩大十倍且内存预算不变，你会优先调整哪项假设或设计？ / If input volume grows tenfold while the memory budget stays fixed, which assumption or design would you revisit first?
- 如果旧版本客户端或依赖无法同步升级，你会如何维持兼容并界定退出时间？ / If older clients or dependencies cannot upgrade together, how would you preserve compatibility and define an exit date?
- 如果问题只在少数时间窗口出现且本地难以复现，你会先增加什么证据？ / If the issue appears only in a few time windows and is hard to reproduce locally, what evidence would you add first?
- 如果上线日期固定而验证时间减少，你会定义哪些发布门槛和回退条件？ / If the launch date is fixed and validation time shrinks, which release gates and rollback conditions would you define?
- 如果运行成本超出预算但核心可靠性目标不变，你会如何重新权衡？ / If operating cost exceeds the budget while core reliability targets remain fixed, how would you rebalance the trade-offs?

### 收入增长但现金流变差 / Revenue rises while cash flow worsens
保留：`bulk1000-b-026-v1`；合并：`bulk1000-b-026-v2`、`bulk1000-b-026-v3`、`bulk1000-b-026-v4`、`bulk1000-b-026-v5`
- 如果付费方和实际使用者追求相反结果，你会怎样识别真正创造价值的一方并设定取舍？ / If the payer and end user want opposite outcomes, how would you identify where value is created and set the trade-off?
- 如果获客增长但服务成本和回收周期同时恶化，你会怎样判断业务是否值得继续扩张？ / If acquisition grows while service cost and payback period worsen, how would you decide whether the business should keep scaling?
- 如果需求已经出现但供给侧无法稳定履约，你会怎样判断瓶颈位于价值链的哪一环？ / If demand exists but supply cannot fulfill consistently, how would you locate the bottleneck in the value chain?
- If regulation in a new market changes who can transact and hold customer data, how would you reassess the business model? / If new-market rules change who can transact and hold customer data, how would you reassess the business model?
- 如果合同收入确认时间与用户获得价值的时间不一致，你会怎样说明业务表现并防止错误激励？ / If contract revenue recognition and the time users receive value differ, how would you represent performance and avoid harmful incentives?

### 新市场的价值链识别 / Mapping the value chain in a new market
保留：`bulk1000-b-027-v1`；合并：`bulk1000-b-027-v2`、`bulk1000-b-027-v3`、`bulk1000-b-027-v4`、`bulk1000-b-027-v5`
- 如果付费方和实际使用者追求相反结果，你会怎样识别真正创造价值的一方并设定取舍？ / If the payer and end user want opposite outcomes, how would you identify where value is created and set the trade-off?
- 如果获客增长但服务成本和回收周期同时恶化，你会怎样判断业务是否值得继续扩张？ / If acquisition grows while service cost and payback period worsen, how would you decide whether the business should keep scaling?
- 如果需求已经出现但供给侧无法稳定履约，你会怎样判断瓶颈位于价值链的哪一环？ / If demand exists but supply cannot fulfill consistently, how would you locate the bottleneck in the value chain?
- If regulation in a new market changes who can transact and hold customer data, how would you reassess the business model? / If new-market rules change who can transact and hold customer data, how would you reassess the business model?
- 如果合同收入确认时间与用户获得价值的时间不一致，你会怎样说明业务表现并防止错误激励？ / If contract revenue recognition and the time users receive value differ, how would you represent performance and avoid harmful incentives?

### 跨团队项目状态模型 / Cross-team project state model
保留：`bulk1000-b-028-v1`；合并：`bulk1000-b-028-v2`、`bulk1000-b-028-v3`、`bulk1000-b-028-v4`、`bulk1000-b-028-v5`
- 如果相同状态名称在不同业务流程中代表不同责任，你会怎样保留流程差异并建立可汇总的共同模型？ / If the same state label implies different responsibilities across workflows, how would you preserve local meaning while creating a roll-up model?
- 如果两个业务实体需要合并且历史关联无法唯一映射，你会怎样保留来源和未决关系？ / If two business entities must merge and old relationships cannot map uniquely, how would you preserve provenance and unresolved links?
- 如果多个角色可以推进或撤销同一状态，你会怎样定义合法转换、权限和审计记录？ / If several roles can advance or reverse a state, how would you define valid transitions, permissions, and audit records?
- 如果两个系统为同一客户生成不同标识且都被下游引用，你会怎样建立映射和纠错机制？ / If two systems assign different identifiers to the same customer and downstream systems use both, how would you build mapping and correction?
- 如果用户需要回答“当时谁负责、当时属于哪个组织”，你会怎样建模有效时间和变更记录？ / If users need to know who owned something or which organization it belonged to at a past point in time, how would you model valid time and changes?

### 用户身份与组织关系边界 / Boundaries among users and organizations
保留：`bulk1000-b-029-v1`；合并：`bulk1000-b-029-v2`、`bulk1000-b-029-v3`、`bulk1000-b-029-v4`、`bulk1000-b-029-v5`
- 如果相同状态名称在不同业务流程中代表不同责任，你会怎样保留流程差异并建立可汇总的共同模型？ / If the same state label implies different responsibilities across workflows, how would you preserve local meaning while creating a roll-up model?
- 如果两个业务实体需要合并且历史关联无法唯一映射，你会怎样保留来源和未决关系？ / If two business entities must merge and old relationships cannot map uniquely, how would you preserve provenance and unresolved links?
- 如果多个角色可以推进或撤销同一状态，你会怎样定义合法转换、权限和审计记录？ / If several roles can advance or reverse a state, how would you define valid transitions, permissions, and audit records?
- 如果两个系统为同一客户生成不同标识且都被下游引用，你会怎样建立映射和纠错机制？ / If two systems assign different identifiers to the same customer and downstream systems use both, how would you build mapping and correction?
- 如果用户需要回答“当时谁负责、当时属于哪个组织”，你会怎样建模有效时间和变更记录？ / If users need to know who owned something or which organization it belonged to at a past point in time, how would you model valid time and changes?

### 订阅升级与账期切换 / Subscription upgrades and billing-cycle changes
保留：`bulk1000-b-030-v1`；合并：`bulk1000-b-030-v2`、`bulk1000-b-030-v3`、`bulk1000-b-030-v4`、`bulk1000-b-030-v5`
- 如果订单经过折扣、税费和多方分账后必须保证金额守恒，你会怎样定义舍入、残差和对账规则？ / If discounts, tax, and multi-party allocation must conserve the total, how would you define rounding, residuals, and reconciliation?
- 如果退款可能发生在结算前，也可能跨多个结算周期才到达，你会怎样表达冲正和账期归属？ / If refunds may happen before settlement or arrive several cycles later, how would you represent reversals and period ownership?
- 如果关键客户合同覆盖标准价格规则，你会怎样区分可配置例外和必须改代码的规则？ / If a strategic customer contract overrides standard pricing, how would you distinguish configurable exceptions from rules that require code changes?
- 如果业务要求追溯调整历史订单，但审计又要求保留原始交易金额，你会怎样保存两种口径？ / If the business wants historical repricing while audit requires original transaction amounts, how would you preserve both views?
- 如果促销、优惠券和渠道补贴叠加后出现负毛利，你会怎样定义拦截规则和审批例外？ / If promotions, coupons, and channel subsidies combine into negative-margin orders, how would you define guardrails and approval exceptions?

### 部分退款、佣金冲回与规则版本 / Partial refunds, commission reversals, and rule versions
保留：`bulk1000-b-031-v1`；合并：`bulk1000-b-031-v2`、`bulk1000-b-031-v3`、`bulk1000-b-031-v4`、`bulk1000-b-031-v5`
- 后续将原先独立的部分退款结算和历史规则版本题合并到该主问，保留交易发生时适用的规则、退款跨结算周期、冲回、防重复及账目复核等差异追问。
- 如果订单经过折扣、税费和多方分账后必须保证金额守恒，你会怎样定义舍入、残差和对账规则？ / If discounts, tax, and multi-party allocation must conserve the total, how would you define rounding, residuals, and reconciliation?
- 如果退款可能发生在结算前，也可能跨多个结算周期才到达，你会怎样表达冲正和账期归属？ / If refunds may happen before settlement or arrive several cycles later, how would you represent reversals and period ownership?
- 如果关键客户合同覆盖标准价格规则，你会怎样区分可配置例外和必须改代码的规则？ / If a strategic customer contract overrides standard pricing, how would you distinguish configurable exceptions from rules that require code changes?
- 如果业务要求追溯调整历史订单，但审计又要求保留原始交易金额，你会怎样保存两种口径？ / If the business wants historical repricing while audit requires original transaction amounts, how would you preserve both views?
- 如果促销、优惠券和渠道补贴叠加后出现负毛利，你会怎样定义拦截规则和审批例外？ / If promotions, coupons, and channel subsidies combine into negative-margin orders, how would you define guardrails and approval exceptions?

### 事实表粒度与重复计数 / Fact-table grain and double counting
保留：`bulk1000-b-032-v1`；合并：`bulk1000-b-032-v2`、`bulk1000-b-032-v3`、`bulk1000-b-032-v4`、`bulk1000-b-032-v5`
- 如果一张订单拆成多次履约且退款按履约批次发生，你会怎样设计事实粒度以避免重复计数？ / If one order is fulfilled in multiple batches and refunds attach to batches, how would you define grain without double counting?
- 如果上游重放旧事件且事件本身没有稳定唯一键，你会怎样识别重复并保留可审计处理过程？ / If upstream replays old events without stable unique keys, how would you detect duplicates and retain an auditable process?
- 如果一个系统使用软删除、另一个执行物理删除，你会怎样统一下游可见性和合规证明？ / If one system soft-deletes while another physically deletes, how would you align downstream visibility and compliance evidence?
- 如果汇率每天变化且财务要求按交易日和结算日分别汇总，你会怎样建模汇率事实与金额粒度？ / If exchange rates change daily and finance needs both transaction-date and settlement-date totals, how would you model rates and amount grain?
- 如果一笔交易可关联多个渠道和多个负责人，直接连接维表会放大金额，你会怎样建模分摊？ / If a transaction links to several channels and owners, a direct dimension join inflates revenue. How would you model allocation?

### CDC删除事件与物化视图 / CDC deletion events and materialized views
保留：`bulk1000-b-033-v1`；合并：`bulk1000-b-033-v2`、`bulk1000-b-033-v3`、`bulk1000-b-033-v4`、`bulk1000-b-033-v5`
- 如果一张订单拆成多次履约且退款按履约批次发生，你会怎样设计事实粒度以避免重复计数？ / If one order is fulfilled in multiple batches and refunds attach to batches, how would you define grain without double counting?
- 如果上游重放旧事件且事件本身没有稳定唯一键，你会怎样识别重复并保留可审计处理过程？ / If upstream replays old events without stable unique keys, how would you detect duplicates and retain an auditable process?
- 如果一个系统使用软删除、另一个执行物理删除，你会怎样统一下游可见性和合规证明？ / If one system soft-deletes while another physically deletes, how would you align downstream visibility and compliance evidence?
- 如果汇率每天变化且财务要求按交易日和结算日分别汇总，你会怎样建模汇率事实与金额粒度？ / If exchange rates change daily and finance needs both transaction-date and settlement-date totals, how would you model rates and amount grain?
- 如果一笔交易可关联多个渠道和多个负责人，直接连接维表会放大金额，你会怎样建模分摊？ / If a transaction links to several channels and owners, a direct dimension join inflates revenue. How would you model allocation?

### 特征快照与标签穿越 / Feature snapshots and label leakage
保留：`bulk1000-b-034-v1`；合并：`bulk1000-b-034-v2`、`bulk1000-b-034-v3`、`bulk1000-b-034-v4`、`bulk1000-b-034-v5`
- 如果关键特征的刷新延迟超过实时决策窗口，你会怎样决定使用陈旧值、回退值还是拒绝决策？ / If a critical feature refresh misses the real-time decision window, how would you choose among stale values, fallbacks, or refusing the decision?
- 如果空值有时表示未知、有时表示不适用、还有时表示尚未发生，你会怎样定义特征契约？ / If null means unknown, not applicable, or not yet occurred depending on the stage, how would you define the feature contract?
- 如果离线和在线特征代码分开维护并开始产生偏差，你会怎样检测、定位并降低重复定义？ / If offline and online feature code is maintained separately and begins to diverge, how would you detect, locate, and reduce duplicate definitions?
- 如果历史回填修改了过去时点可见的数据，你会怎样判断训练样本是否被未来信息污染？ / If a backfill changes data visible at past prediction times, how would you determine whether training samples contain future information?
- 如果组合特征的计算成本超过线上延迟预算，你会怎样比较预计算、缓存和简化定义？ / If a derived feature exceeds the online latency budget, how would you compare precomputation, caching, and simplifying its definition?

### 特征口径在模型间漂移 / Feature definition drift across models
保留题卡：`bulk-b-feature-02`（原 `bulk1000-b-035-v1`；已与本地题库中的同类题合并）。本组其他候选：`bulk1000-b-035-v2`、`bulk1000-b-035-v3`、`bulk1000-b-035-v4`、`bulk1000-b-035-v5`
- 如果关键特征的刷新延迟超过实时决策窗口，你会怎样决定使用陈旧值、回退值还是拒绝决策？ / If a critical feature refresh misses the real-time decision window, how would you choose among stale values, fallbacks, or refusing the decision?
- 如果空值有时表示未知、有时表示不适用、还有时表示尚未发生，你会怎样定义特征契约？ / If null means unknown, not applicable, or not yet occurred depending on the stage, how would you define the feature contract?
- 如果离线和在线特征代码分开维护并开始产生偏差，你会怎样检测、定位并降低重复定义？ / If offline and online feature code is maintained separately and begins to diverge, how would you detect, locate, and reduce duplicate definitions?
- 如果历史回填修改了过去时点可见的数据，你会怎样判断训练样本是否被未来信息污染？ / If a backfill changes data visible at past prediction times, how would you determine whether training samples contain future information?
- 如果组合特征的计算成本超过线上延迟预算，你会怎样比较预计算、缓存和简化定义？ / If a derived feature exceeds the online latency budget, how would you compare precomputation, caching, and simplifying its definition?

### 状态模型迁移中的历史解释 / Historical interpretation during state-model migration
保留：`bulk1000-b-036-v1`；合并：`bulk1000-b-036-v2`、`bulk1000-b-036-v3`、`bulk1000-b-036-v4`、`bulk1000-b-036-v5`
- 如果迁移期间新规则已生效但历史争议仍按旧规则处理，你会怎样让每条结果携带对应的规则版本？ / If the new rule is active while historical disputes still use the old one, how would each result retain its governing rule version?
- 如果部署必须回滚但部分账单已结算，你会怎样区分代码回滚、业务补偿和事实修正？ / If a release must roll back after some invoices settle, how would you separate code rollback, business compensation, and fact correction?
- 如果多个下游系统升级时间不同，你会怎样设计双写、兼容窗口和停止旧格式的判据？ / If downstream systems upgrade at different times, how would you design dual writes, a compatibility window, and criteria for retiring the old format?
- 如果旧数据缺少新规则要求的字段且无法可靠推断，你会怎样标记不确定性并划分重算边界？ / If old data lacks fields required by a new rule and cannot be reliably inferred, how would you mark uncertainty and bound recomputation?
- 如果规则变更导致新旧期间不可直接比较，你会怎样提供桥接指标并解释趋势断点？ / If a rule change makes periods incomparable, how would you provide bridge metrics and explain the break in trend?

### 规则变更后的可重算边界 / Recomputation boundaries after a rule change
保留：`bulk1000-b-037-v1`；合并：`bulk1000-b-037-v2`、`bulk1000-b-037-v3`、`bulk1000-b-037-v4`、`bulk1000-b-037-v5`
- 如果迁移期间新规则已生效但历史争议仍按旧规则处理，你会怎样让每条结果携带对应的规则版本？ / If the new rule is active while historical disputes still use the old one, how would each result retain its governing rule version?
- 如果部署必须回滚但部分账单已结算，你会怎样区分代码回滚、业务补偿和事实修正？ / If a release must roll back after some invoices settle, how would you separate code rollback, business compensation, and fact correction?
- 如果多个下游系统升级时间不同，你会怎样设计双写、兼容窗口和停止旧格式的判据？ / If downstream systems upgrade at different times, how would you design dual writes, a compatibility window, and criteria for retiring the old format?
- 如果旧数据缺少新规则要求的字段且无法可靠推断，你会怎样标记不确定性并划分重算边界？ / If old data lacks fields required by a new rule and cannot be reliably inferred, how would you mark uncertainty and bound recomputation?
- 如果规则变更导致新旧期间不可直接比较，你会怎样提供桥接指标并解释趋势断点？ / If a rule change makes periods incomparable, how would you provide bridge metrics and explain the break in trend?

### 用户频繁绕过核心流程 / Users frequently bypass the primary flow
保留：`bulk1000-c-038-v1`；合并：`bulk1000-c-038-v2`、`bulk1000-c-038-v3`、`bulk1000-c-038-v4`、`bulk1000-c-038-v5`
- 如果不同细分群体的价值和成本差异很大，你会如何确定目标人群与护栏？ / If segments differ sharply in value and cost, how would you choose a target audience and guardrails?
- 如果预算只能支持一个方向，你会如何比较机会成本并说明放弃的代价？ / If the budget can fund only one direction, how would you compare opportunity cost and explain what is being given up?
- 如果无法随机分组，你会用什么证据估计因果影响，并明确哪些结论仍不确定？ / If random assignment is unavailable, what evidence would you use to estimate causal impact and what uncertainty would remain?
- 如果领先指标改善而业务结果仍未变化，你会判断继续、调整还是停止？ / If leading indicators improve but business outcomes do not, how would you decide whether to continue, adjust, or stop?
- 如果结果看似变好但无法确认机制，你会如何决定扩大投入还是补充验证？ / If outcomes appear better but the mechanism is unclear, how would you choose between scaling investment and further validation?

### 高活跃不等于高价值 / High activity does not equal high value
保留：`bulk1000-c-039-v1`；合并：`bulk1000-c-039-v2`、`bulk1000-c-039-v3`、`bulk1000-c-039-v4`、`bulk1000-c-039-v5`
- 如果不同细分群体的价值和成本差异很大，你会如何确定目标人群与护栏？ / If segments differ sharply in value and cost, how would you choose a target audience and guardrails?
- 如果预算只能支持一个方向，你会如何比较机会成本并说明放弃的代价？ / If the budget can fund only one direction, how would you compare opportunity cost and explain what is being given up?
- 如果无法随机分组，你会用什么证据估计因果影响，并明确哪些结论仍不确定？ / If random assignment is unavailable, what evidence would you use to estimate causal impact and what uncertainty would remain?
- 如果领先指标改善而业务结果仍未变化，你会判断继续、调整还是停止？ / If leading indicators improve but business outcomes do not, how would you decide whether to continue, adjust, or stop?
- 如果结果看似变好但无法确认机制，你会如何决定扩大投入还是补充验证？ / If outcomes appear better but the mechanism is unclear, how would you choose between scaling investment and further validation?

### 客户定制请求是否产品化 / Whether to productize a custom request
保留：`bulk1000-c-040-v1`；合并：`bulk1000-c-040-v2`、`bulk1000-c-040-v3`、`bulk1000-c-040-v4`、`bulk1000-c-040-v5`
- 如果不同细分群体的价值和成本差异很大，你会如何确定目标人群与护栏？ / If segments differ sharply in value and cost, how would you choose a target audience and guardrails?
- 如果预算只能支持一个方向，你会如何比较机会成本并说明放弃的代价？ / If the budget can fund only one direction, how would you compare opportunity cost and explain what is being given up?
- 如果无法随机分组，你会用什么证据估计因果影响，并明确哪些结论仍不确定？ / If random assignment is unavailable, what evidence would you use to estimate causal impact and what uncertainty would remain?
- 如果领先指标改善而业务结果仍未变化，你会判断继续、调整还是停止？ / If leading indicators improve but business outcomes do not, how would you decide whether to continue, adjust, or stop?
- 如果结果看似变好但无法确认机制，你会如何决定扩大投入还是补充验证？ / If outcomes appear better but the mechanism is unclear, how would you choose between scaling investment and further validation?

### 短期收入与基础能力争夺资源 / Short-term revenue versus foundational capability
保留：`bulk1000-c-041-v1`；合并：`bulk1000-c-041-v2`、`bulk1000-c-041-v3`、`bulk1000-c-041-v4`、`bulk1000-c-041-v5`
- 如果不同细分群体的价值和成本差异很大，你会如何确定目标人群与护栏？ / If segments differ sharply in value and cost, how would you choose a target audience and guardrails?
- 如果预算只能支持一个方向，你会如何比较机会成本并说明放弃的代价？ / If the budget can fund only one direction, how would you compare opportunity cost and explain what is being given up?
- 如果无法随机分组，你会用什么证据估计因果影响，并明确哪些结论仍不确定？ / If random assignment is unavailable, what evidence would you use to estimate causal impact and what uncertainty would remain?
- 如果领先指标改善而业务结果仍未变化，你会判断继续、调整还是停止？ / If leading indicators improve but business outcomes do not, how would you decide whether to continue, adjust, or stop?
- 如果结果看似变好但无法确认机制，你会如何决定扩大投入还是补充验证？ / If outcomes appear better but the mechanism is unclear, how would you choose between scaling investment and further validation?

### 多个“最高优先级”的排序 / Ordering several “top priorities”
保留：`bulk1000-c-042-v1`；合并：`bulk1000-c-042-v2`、`bulk1000-c-042-v3`、`bulk1000-c-042-v4`、`bulk1000-c-042-v5`
- 如果不同细分群体的价值和成本差异很大，你会如何确定目标人群与护栏？ / If segments differ sharply in value and cost, how would you choose a target audience and guardrails?
- 如果预算只能支持一个方向，你会如何比较机会成本并说明放弃的代价？ / If the budget can fund only one direction, how would you compare opportunity cost and explain what is being given up?
- 如果无法随机分组，你会用什么证据估计因果影响，并明确哪些结论仍不确定？ / If random assignment is unavailable, what evidence would you use to estimate causal impact and what uncertainty would remain?
- 如果领先指标改善而业务结果仍未变化，你会判断继续、调整还是停止？ / If leading indicators improve but business outcomes do not, how would you decide whether to continue, adjust, or stop?
- 如果结果看似变好但无法确认机制，你会如何决定扩大投入还是补充验证？ / If outcomes appear better but the mechanism is unclear, how would you choose between scaling investment and further validation?

### 实验机会与维护工作冲突 / Experiments competing with maintenance work
保留：`bulk1000-c-043-v1`；合并：`bulk1000-c-043-v2`、`bulk1000-c-043-v3`、`bulk1000-c-043-v4`、`bulk1000-c-043-v5`
- 如果不同细分群体的价值和成本差异很大，你会如何确定目标人群与护栏？ / If segments differ sharply in value and cost, how would you choose a target audience and guardrails?
- 如果预算只能支持一个方向，你会如何比较机会成本并说明放弃的代价？ / If the budget can fund only one direction, how would you compare opportunity cost and explain what is being given up?
- 如果无法随机分组，你会用什么证据估计因果影响，并明确哪些结论仍不确定？ / If random assignment is unavailable, what evidence would you use to estimate causal impact and what uncertainty would remain?
- 如果领先指标改善而业务结果仍未变化，你会判断继续、调整还是停止？ / If leading indicators improve but business outcomes do not, how would you decide whether to continue, adjust, or stop?
- 如果结果看似变好但无法确认机制，你会如何决定扩大投入还是补充验证？ / If outcomes appear better but the mechanism is unclear, how would you choose between scaling investment and further validation?

### 季度目标遇到年度方向变化 / Quarterly goals after annual direction shifts
保留：`bulk1000-c-044-v1`；合并：`bulk1000-c-044-v2`、`bulk1000-c-044-v3`、`bulk1000-c-044-v4`、`bulk1000-c-044-v5`
- 如果不同细分群体的价值和成本差异很大，你会如何确定目标人群与护栏？ / If segments differ sharply in value and cost, how would you choose a target audience and guardrails?
- 如果预算只能支持一个方向，你会如何比较机会成本并说明放弃的代价？ / If the budget can fund only one direction, how would you compare opportunity cost and explain what is being given up?
- 如果无法随机分组，你会用什么证据估计因果影响，并明确哪些结论仍不确定？ / If random assignment is unavailable, what evidence would you use to estimate causal impact and what uncertainty would remain?
- 如果领先指标改善而业务结果仍未变化，你会判断继续、调整还是停止？ / If leading indicators improve but business outcomes do not, how would you decide whether to continue, adjust, or stop?
- 如果结果看似变好但无法确认机制，你会如何决定扩大投入还是补充验证？ / If outcomes appear better but the mechanism is unclear, how would you choose between scaling investment and further validation?

### 规划数字依赖未经验证的假设 / Plan targets depend on unvalidated assumptions
保留：`bulk1000-c-045-v1`；合并：`bulk1000-c-045-v2`、`bulk1000-c-045-v3`、`bulk1000-c-045-v4`、`bulk1000-c-045-v5`
- 如果不同细分群体的价值和成本差异很大，你会如何确定目标人群与护栏？ / If segments differ sharply in value and cost, how would you choose a target audience and guardrails?
- 如果预算只能支持一个方向，你会如何比较机会成本并说明放弃的代价？ / If the budget can fund only one direction, how would you compare opportunity cost and explain what is being given up?
- 如果无法随机分组，你会用什么证据估计因果影响，并明确哪些结论仍不确定？ / If random assignment is unavailable, what evidence would you use to estimate causal impact and what uncertainty would remain?
- 如果领先指标改善而业务结果仍未变化，你会判断继续、调整还是停止？ / If leading indicators improve but business outcomes do not, how would you decide whether to continue, adjust, or stop?
- 如果结果看似变好但无法确认机制，你会如何决定扩大投入还是补充验证？ / If outcomes appear better but the mechanism is unclear, how would you choose between scaling investment and further validation?

### 能力建设如何进入路线图 / How capability building enters a roadmap
保留：`bulk1000-c-046-v1`；合并：`bulk1000-c-046-v2`、`bulk1000-c-046-v3`、`bulk1000-c-046-v4`、`bulk1000-c-046-v5`
- 如果不同细分群体的价值和成本差异很大，你会如何确定目标人群与护栏？ / If segments differ sharply in value and cost, how would you choose a target audience and guardrails?
- 如果预算只能支持一个方向，你会如何比较机会成本并说明放弃的代价？ / If the budget can fund only one direction, how would you compare opportunity cost and explain what is being given up?
- 如果无法随机分组，你会用什么证据估计因果影响，并明确哪些结论仍不确定？ / If random assignment is unavailable, what evidence would you use to estimate causal impact and what uncertainty would remain?
- 如果领先指标改善而业务结果仍未变化，你会判断继续、调整还是停止？ / If leading indicators improve but business outcomes do not, how would you decide whether to continue, adjust, or stop?
- 如果结果看似变好但无法确认机制，你会如何决定扩大投入还是补充验证？ / If outcomes appear better but the mechanism is unclear, how would you choose between scaling investment and further validation?

### 整体指标提升但目标群体变差 / Aggregate metrics improve while the target segment worsens
保留：`bulk1000-c-047-v1`；合并：`bulk1000-c-047-v2`、`bulk1000-c-047-v3`、`bulk1000-c-047-v4`、`bulk1000-c-047-v5`
- 如果不同细分群体的价值和成本差异很大，你会如何确定目标人群与护栏？ / If segments differ sharply in value and cost, how would you choose a target audience and guardrails?
- 如果预算只能支持一个方向，你会如何比较机会成本并说明放弃的代价？ / If the budget can fund only one direction, how would you compare opportunity cost and explain what is being given up?
- 如果无法随机分组，你会用什么证据估计因果影响，并明确哪些结论仍不确定？ / If random assignment is unavailable, what evidence would you use to estimate causal impact and what uncertainty would remain?
- 如果领先指标改善而业务结果仍未变化，你会判断继续、调整还是停止？ / If leading indicators improve but business outcomes do not, how would you decide whether to continue, adjust, or stop?
- 如果结果看似变好但无法确认机制，你会如何决定扩大投入还是补充验证？ / If outcomes appear better but the mechanism is unclear, how would you choose between scaling investment and further validation?

### 相关性被误当成增长效果 / Correlation mistaken for growth impact
保留：`bulk1000-c-048-v1`；合并：`bulk1000-c-048-v2`、`bulk1000-c-048-v3`、`bulk1000-c-048-v4`、`bulk1000-c-048-v5`
- 如果不同细分群体的价值和成本差异很大，你会如何确定目标人群与护栏？ / If segments differ sharply in value and cost, how would you choose a target audience and guardrails?
- 如果预算只能支持一个方向，你会如何比较机会成本并说明放弃的代价？ / If the budget can fund only one direction, how would you compare opportunity cost and explain what is being given up?
- 如果无法随机分组，你会用什么证据估计因果影响，并明确哪些结论仍不确定？ / If random assignment is unavailable, what evidence would you use to estimate causal impact and what uncertainty would remain?
- 如果领先指标改善而业务结果仍未变化，你会判断继续、调整还是停止？ / If leading indicators improve but business outcomes do not, how would you decide whether to continue, adjust, or stop?
- 如果结果看似变好但无法确认机制，你会如何决定扩大投入还是补充验证？ / If outcomes appear better but the mechanism is unclear, how would you choose between scaling investment and further validation?

### 北极星指标鼓励局部刷量 / A north-star metric rewards local gaming
保留：`bulk1000-c-049-v1`；合并：`bulk1000-c-049-v2`、`bulk1000-c-049-v3`、`bulk1000-c-049-v4`、`bulk1000-c-049-v5`
- 如果不同细分群体的价值和成本差异很大，你会如何确定目标人群与护栏？ / If segments differ sharply in value and cost, how would you choose a target audience and guardrails?
- 如果预算只能支持一个方向，你会如何比较机会成本并说明放弃的代价？ / If the budget can fund only one direction, how would you compare opportunity cost and explain what is being given up?
- 如果无法随机分组，你会用什么证据估计因果影响，并明确哪些结论仍不确定？ / If random assignment is unavailable, what evidence would you use to estimate causal impact and what uncertainty would remain?
- 如果领先指标改善而业务结果仍未变化，你会判断继续、调整还是停止？ / If leading indicators improve but business outcomes do not, how would you decide whether to continue, adjust, or stop?
- 如果结果看似变好但无法确认机制，你会如何决定扩大投入还是补充验证？ / If outcomes appear better but the mechanism is unclear, how would you choose between scaling investment and further validation?

### 自研平台与采购服务的边界 / Build-versus-buy boundary for a platform
保留：`bulk1000-c-050-v1`；合并：`bulk1000-c-050-v2`、`bulk1000-c-050-v3`、`bulk1000-c-050-v4`、`bulk1000-c-050-v5`
- 如果不同细分群体的价值和成本差异很大，你会如何确定目标人群与护栏？ / If segments differ sharply in value and cost, how would you choose a target audience and guardrails?
- 如果预算只能支持一个方向，你会如何比较机会成本并说明放弃的代价？ / If the budget can fund only one direction, how would you compare opportunity cost and explain what is being given up?
- 如果无法随机分组，你会用什么证据估计因果影响，并明确哪些结论仍不确定？ / If random assignment is unavailable, what evidence would you use to estimate causal impact and what uncertainty would remain?
- 如果领先指标改善而业务结果仍未变化，你会判断继续、调整还是停止？ / If leading indicators improve but business outcomes do not, how would you decide whether to continue, adjust, or stop?
- 如果结果看似变好但无法确认机制，你会如何决定扩大投入还是补充验证？ / If outcomes appear better but the mechanism is unclear, how would you choose between scaling investment and further validation?

### 技术债偿还收益如何验证 / How to verify the return from technical-debt work
保留：`bulk1000-c-051-v1`；合并：`bulk1000-c-051-v2`、`bulk1000-c-051-v3`、`bulk1000-c-051-v4`、`bulk1000-c-051-v5`
- 如果不同细分群体的价值和成本差异很大，你会如何确定目标人群与护栏？ / If segments differ sharply in value and cost, how would you choose a target audience and guardrails?
- 如果预算只能支持一个方向，你会如何比较机会成本并说明放弃的代价？ / If the budget can fund only one direction, how would you compare opportunity cost and explain what is being given up?
- 如果无法随机分组，你会用什么证据估计因果影响，并明确哪些结论仍不确定？ / If random assignment is unavailable, what evidence would you use to estimate causal impact and what uncertainty would remain?
- 如果领先指标改善而业务结果仍未变化，你会判断继续、调整还是停止？ / If leading indicators improve but business outcomes do not, how would you decide whether to continue, adjust, or stop?
- 如果结果看似变好但无法确认机制，你会如何决定扩大投入还是补充验证？ / If outcomes appear better but the mechanism is unclear, how would you choose between scaling investment and further validation?

### 模糊承诺拆成可验证结果 / Decomposing an ambiguous commitment into verifiable outcomes
保留题卡：`d-decomposition-reduce-deploy-failure`（已吸收 `bulk1000-d-052-v1` 的目标拆解场景）。本组其他候选：`bulk1000-d-052-v2`、`bulk1000-d-052-v3`、`bulk1000-d-052-v4`、`bulk1000-d-052-v5`
- 如果关键依赖延期一个迭代，你会如何重排关键路径、更新承诺并减少等待？ / If a critical dependency slips by one cycle, how would you re-sequence the critical path, reset commitments, and reduce waiting?
- 如果可用容量减少三成，你会如何保留目标、缩减范围并让被影响方参与取舍？ / If available capacity falls by thirty percent, how would you preserve the goal, reduce scope, and involve affected stakeholders?
- 如果部分变更不可逆，你会如何重设发布顺序、验收门槛和恢复方案？ / If part of the change cannot be safely reversed, how would you redesign release order, acceptance gates, and recovery?
- 如果不同地区执行流程不一致，你会怎样区分必须统一的控制点和允许本地化的部分？ / If regions execute the process differently, how would you distinguish controls that must be shared from areas that may vary locally?
- 如果维护团队不愿接收系统，你会如何验证交接准备度并解决长期运维责任？ / If the operations team will not accept the system, how would you verify handoff readiness and resolve long-term ownership?

### 技术方案先于问题定义 / Solution proposed before the problem is understood
保留：`bulk1000-d-053-v1`；合并：`bulk1000-d-053-v2`、`bulk1000-d-053-v3`、`bulk1000-d-053-v4`、`bulk1000-d-053-v5`
- 如果关键依赖延期一个迭代，你会如何重排关键路径、更新承诺并减少等待？ / If a critical dependency slips by one cycle, how would you re-sequence the critical path, reset commitments, and reduce waiting?
- 如果可用容量减少三成，你会如何保留目标、缩减范围并让被影响方参与取舍？ / If available capacity falls by thirty percent, how would you preserve the goal, reduce scope, and involve affected stakeholders?
- 如果部分变更不可逆，你会如何重设发布顺序、验收门槛和恢复方案？ / If part of the change cannot be safely reversed, how would you redesign release order, acceptance gates, and recovery?
- 如果不同地区执行流程不一致，你会怎样区分必须统一的控制点和允许本地化的部分？ / If regions execute the process differently, how would you distinguish controls that must be shared from areas that may vary locally?
- 如果维护团队不愿接收系统，你会如何验证交接准备度并解决长期运维责任？ / If the operations team will not accept the system, how would you verify handoff readiness and resolve long-term ownership?

### 共享专家被多个项目同时承诺 / A shared expert promised to several projects
保留：`bulk1000-d-054-v1`；合并：`bulk1000-d-054-v2`、`bulk1000-d-054-v3`、`bulk1000-d-054-v4`、`bulk1000-d-054-v5`
- 如果关键依赖延期一个迭代，你会如何重排关键路径、更新承诺并减少等待？ / If a critical dependency slips by one cycle, how would you re-sequence the critical path, reset commitments, and reduce waiting?
- 如果可用容量减少三成，你会如何保留目标、缩减范围并让被影响方参与取舍？ / If available capacity falls by thirty percent, how would you preserve the goal, reduce scope, and involve affected stakeholders?
- 如果部分变更不可逆，你会如何重设发布顺序、验收门槛和恢复方案？ / If part of the change cannot be safely reversed, how would you redesign release order, acceptance gates, and recovery?
- 如果不同地区执行流程不一致，你会怎样区分必须统一的控制点和允许本地化的部分？ / If regions execute the process differently, how would you distinguish controls that must be shared from areas that may vary locally?
- 如果维护团队不愿接收系统，你会如何验证交接准备度并解决长期运维责任？ / If the operations team will not accept the system, how would you verify handoff readiness and resolve long-term ownership?

### 外部依赖没有明确交付人 / External dependency has no accountable owner
保留：`bulk1000-d-055-v1`；合并：`bulk1000-d-055-v2`、`bulk1000-d-055-v3`、`bulk1000-d-055-v4`、`bulk1000-d-055-v5`
- 如果关键依赖延期一个迭代，你会如何重排关键路径、更新承诺并减少等待？ / If a critical dependency slips by one cycle, how would you re-sequence the critical path, reset commitments, and reduce waiting?
- 如果可用容量减少三成，你会如何保留目标、缩减范围并让被影响方参与取舍？ / If available capacity falls by thirty percent, how would you preserve the goal, reduce scope, and involve affected stakeholders?
- 如果部分变更不可逆，你会如何重设发布顺序、验收门槛和恢复方案？ / If part of the change cannot be safely reversed, how would you redesign release order, acceptance gates, and recovery?
- 如果不同地区执行流程不一致，你会怎样区分必须统一的控制点和允许本地化的部分？ / If regions execute the process differently, how would you distinguish controls that must be shared from areas that may vary locally?
- 如果维护团队不愿接收系统，你会如何验证交接准备度并解决长期运维责任？ / If the operations team will not accept the system, how would you verify handoff readiness and resolve long-term ownership?

### 范围变更后的基线与承诺 / Baselines and commitments after scope changes
保留：`bulk1000-d-056-v1`；合并：`bulk1000-d-056-v2`、`bulk1000-d-056-v3`、`bulk1000-d-056-v4`、`bulk1000-d-056-v5`
- 如果关键依赖延期一个迭代，你会如何重排关键路径、更新承诺并减少等待？ / If a critical dependency slips by one cycle, how would you re-sequence the critical path, reset commitments, and reduce waiting?
- 如果可用容量减少三成，你会如何保留目标、缩减范围并让被影响方参与取舍？ / If available capacity falls by thirty percent, how would you preserve the goal, reduce scope, and involve affected stakeholders?
- 如果部分变更不可逆，你会如何重设发布顺序、验收门槛和恢复方案？ / If part of the change cannot be safely reversed, how would you redesign release order, acceptance gates, and recovery?
- 如果不同地区执行流程不一致，你会怎样区分必须统一的控制点和允许本地化的部分？ / If regions execute the process differently, how would you distinguish controls that must be shared from areas that may vary locally?
- 如果维护团队不愿接收系统，你会如何验证交接准备度并解决长期运维责任？ / If the operations team will not accept the system, how would you verify handoff readiness and resolve long-term ownership?

### 项目状态报告与真实风险脱节 / Status reporting disconnected from actual risk
保留：`bulk1000-d-057-v1`；合并：`bulk1000-d-057-v2`、`bulk1000-d-057-v3`、`bulk1000-d-057-v4`、`bulk1000-d-057-v5`
- 如果关键依赖延期一个迭代，你会如何重排关键路径、更新承诺并减少等待？ / If a critical dependency slips by one cycle, how would you re-sequence the critical path, reset commitments, and reduce waiting?
- 如果可用容量减少三成，你会如何保留目标、缩减范围并让被影响方参与取舍？ / If available capacity falls by thirty percent, how would you preserve the goal, reduce scope, and involve affected stakeholders?
- 如果部分变更不可逆，你会如何重设发布顺序、验收门槛和恢复方案？ / If part of the change cannot be safely reversed, how would you redesign release order, acceptance gates, and recovery?
- 如果不同地区执行流程不一致，你会怎样区分必须统一的控制点和允许本地化的部分？ / If regions execute the process differently, how would you distinguish controls that must be shared from areas that may vary locally?
- 如果维护团队不愿接收系统，你会如何验证交接准备度并解决长期运维责任？ / If the operations team will not accept the system, how would you verify handoff readiness and resolve long-term ownership?

### 项目组合中的重复投入 / Duplicated investment across a project portfolio
保留：`bulk1000-d-058-v1`；合并：`bulk1000-d-058-v2`、`bulk1000-d-058-v3`、`bulk1000-d-058-v4`、`bulk1000-d-058-v5`
- 如果关键依赖延期一个迭代，你会如何重排关键路径、更新承诺并减少等待？ / If a critical dependency slips by one cycle, how would you re-sequence the critical path, reset commitments, and reduce waiting?
- 如果可用容量减少三成，你会如何保留目标、缩减范围并让被影响方参与取舍？ / If available capacity falls by thirty percent, how would you preserve the goal, reduce scope, and involve affected stakeholders?
- 如果部分变更不可逆，你会如何重设发布顺序、验收门槛和恢复方案？ / If part of the change cannot be safely reversed, how would you redesign release order, acceptance gates, and recovery?
- 如果不同地区执行流程不一致，你会怎样区分必须统一的控制点和允许本地化的部分？ / If regions execute the process differently, how would you distinguish controls that must be shared from areas that may vary locally?
- 如果维护团队不愿接收系统，你会如何验证交接准备度并解决长期运维责任？ / If the operations team will not accept the system, how would you verify handoff readiness and resolve long-term ownership?

### 增长活动后续运营无人接手 / No owner for operations after a growth campaign
保留：`bulk1000-d-059-v1`；合并：`bulk1000-d-059-v2`、`bulk1000-d-059-v3`、`bulk1000-d-059-v4`、`bulk1000-d-059-v5`
- 如果关键依赖延期一个迭代，你会如何重排关键路径、更新承诺并减少等待？ / If a critical dependency slips by one cycle, how would you re-sequence the critical path, reset commitments, and reduce waiting?
- 如果可用容量减少三成，你会如何保留目标、缩减范围并让被影响方参与取舍？ / If available capacity falls by thirty percent, how would you preserve the goal, reduce scope, and involve affected stakeholders?
- 如果部分变更不可逆，你会如何重设发布顺序、验收门槛和恢复方案？ / If part of the change cannot be safely reversed, how would you redesign release order, acceptance gates, and recovery?
- 如果不同地区执行流程不一致，你会怎样区分必须统一的控制点和允许本地化的部分？ / If regions execute the process differently, how would you distinguish controls that must be shared from areas that may vary locally?
- 如果维护团队不愿接收系统，你会如何验证交接准备度并解决长期运维责任？ / If the operations team will not accept the system, how would you verify handoff readiness and resolve long-term ownership?

### 人工运营动作无法追溯 / Manual operational actions are not traceable
保留：`bulk1000-d-060-v1`；合并：`bulk1000-d-060-v2`、`bulk1000-d-060-v3`、`bulk1000-d-060-v4`、`bulk1000-d-060-v5`
- 如果关键依赖延期一个迭代，你会如何重排关键路径、更新承诺并减少等待？ / If a critical dependency slips by one cycle, how would you re-sequence the critical path, reset commitments, and reduce waiting?
- 如果可用容量减少三成，你会如何保留目标、缩减范围并让被影响方参与取舍？ / If available capacity falls by thirty percent, how would you preserve the goal, reduce scope, and involve affected stakeholders?
- 如果部分变更不可逆，你会如何重设发布顺序、验收门槛和恢复方案？ / If part of the change cannot be safely reversed, how would you redesign release order, acceptance gates, and recovery?
- 如果不同地区执行流程不一致，你会怎样区分必须统一的控制点和允许本地化的部分？ / If regions execute the process differently, how would you distinguish controls that must be shared from areas that may vary locally?
- 如果维护团队不愿接收系统，你会如何验证交接准备度并解决长期运维责任？ / If the operations team will not accept the system, how would you verify handoff readiness and resolve long-term ownership?

### 试点有效却无法规模化 / A successful pilot fails to scale
保留：`bulk1000-d-061-v1`；合并：`bulk1000-d-061-v2`、`bulk1000-d-061-v3`、`bulk1000-d-061-v4`、`bulk1000-d-061-v5`
- 如果关键依赖延期一个迭代，你会如何重排关键路径、更新承诺并减少等待？ / If a critical dependency slips by one cycle, how would you re-sequence the critical path, reset commitments, and reduce waiting?
- 如果可用容量减少三成，你会如何保留目标、缩减范围并让被影响方参与取舍？ / If available capacity falls by thirty percent, how would you preserve the goal, reduce scope, and involve affected stakeholders?
- 如果部分变更不可逆，你会如何重设发布顺序、验收门槛和恢复方案？ / If part of the change cannot be safely reversed, how would you redesign release order, acceptance gates, and recovery?
- 如果不同地区执行流程不一致，你会怎样区分必须统一的控制点和允许本地化的部分？ / If regions execute the process differently, how would you distinguish controls that must be shared from areas that may vary locally?
- 如果维护团队不愿接收系统，你会如何验证交接准备度并解决长期运维责任？ / If the operations team will not accept the system, how would you verify handoff readiness and resolve long-term ownership?

### 依赖故障的降级顺序 / Degradation order during dependency failure
保留：`bulk1000-d-062-v1`；合并：`bulk1000-d-062-v2`、`bulk1000-d-062-v3`、`bulk1000-d-062-v4`、`bulk1000-d-062-v5`
- 如果关键依赖延期一个迭代，你会如何重排关键路径、更新承诺并减少等待？ / If a critical dependency slips by one cycle, how would you re-sequence the critical path, reset commitments, and reduce waiting?
- 如果可用容量减少三成，你会如何保留目标、缩减范围并让被影响方参与取舍？ / If available capacity falls by thirty percent, how would you preserve the goal, reduce scope, and involve affected stakeholders?
- 如果部分变更不可逆，你会如何重设发布顺序、验收门槛和恢复方案？ / If part of the change cannot be safely reversed, how would you redesign release order, acceptance gates, and recovery?
- 如果不同地区执行流程不一致，你会怎样区分必须统一的控制点和允许本地化的部分？ / If regions execute the process differently, how would you distinguish controls that must be shared from areas that may vary locally?
- 如果维护团队不愿接收系统，你会如何验证交接准备度并解决长期运维责任？ / If the operations team will not accept the system, how would you verify handoff readiness and resolve long-term ownership?

### 事故演练发现恢复能力不足 / A drill exposes weak recovery capability
保留：`bulk1000-d-063-v1`；合并：`bulk1000-d-063-v2`、`bulk1000-d-063-v3`、`bulk1000-d-063-v4`、`bulk1000-d-063-v5`
- 如果关键依赖延期一个迭代，你会如何重排关键路径、更新承诺并减少等待？ / If a critical dependency slips by one cycle, how would you re-sequence the critical path, reset commitments, and reduce waiting?
- 如果可用容量减少三成，你会如何保留目标、缩减范围并让被影响方参与取舍？ / If available capacity falls by thirty percent, how would you preserve the goal, reduce scope, and involve affected stakeholders?
- 如果部分变更不可逆，你会如何重设发布顺序、验收门槛和恢复方案？ / If part of the change cannot be safely reversed, how would you redesign release order, acceptance gates, and recovery?
- 如果不同地区执行流程不一致，你会怎样区分必须统一的控制点和允许本地化的部分？ / If regions execute the process differently, how would you distinguish controls that must be shared from areas that may vary locally?
- 如果维护团队不愿接收系统，你会如何验证交接准备度并解决长期运维责任？ / If the operations team will not accept the system, how would you verify handoff readiness and resolve long-term ownership?

### 把技术风险讲成可决策信息 / Turning technical risk into decision-ready information
保留：`bulk1000-e-064-v1`；合并：`bulk1000-e-064-v2`、`bulk1000-e-064-v3`、`bulk1000-e-064-v4`、`bulk1000-e-064-v5`
- 如果高层要求当天拍板而关键证据还不完整，你会怎样表达可信边界并争取可逆决策？ / If executives require a decision today while evidence is incomplete, how would you state confidence limits and seek a reversible choice?
- 如果关键合作方不在场且决定会影响他们，你会怎样补足上下文并确认承诺？ / If a key partner misses the discussion and the decision affects them, how would you restore context and confirm commitment?
- 如果你没有最终决定权但需要承担执行结果，你会如何影响决策并记录风险接受者？ / If you lack final decision authority but will own execution, how would you influence the choice and record who accepts the risk?
- 如果客户影响仍在扩大且各方对原因有争议，你会如何组织即时沟通和后续定责？ / If customer impact is still growing and teams disagree about the cause, how would you organize immediate communication and later accountability?
- 如果坚持事实可能让短期协作关系紧张，你会如何处理分歧并保持后续合作空间？ / If standing by the evidence may strain the near-term relationship, how would you handle the disagreement and preserve future collaboration?

### 远程交接丢失关键上下文 / Critical context lost in a remote handoff
保留：`bulk1000-e-065-v1`；合并：`bulk1000-e-065-v2`、`bulk1000-e-065-v3`、`bulk1000-e-065-v4`、`bulk1000-e-065-v5`
- 如果高层要求当天拍板而关键证据还不完整，你会怎样表达可信边界并争取可逆决策？ / If executives require a decision today while evidence is incomplete, how would you state confidence limits and seek a reversible choice?
- 如果关键合作方不在场且决定会影响他们，你会怎样补足上下文并确认承诺？ / If a key partner misses the discussion and the decision affects them, how would you restore context and confirm commitment?
- 如果你没有最终决定权但需要承担执行结果，你会如何影响决策并记录风险接受者？ / If you lack final decision authority but will own execution, how would you influence the choice and record who accepts the risk?
- 如果客户影响仍在扩大且各方对原因有争议，你会如何组织即时沟通和后续定责？ / If customer impact is still growing and teams disagree about the cause, how would you organize immediate communication and later accountability?
- 如果坚持事实可能让短期协作关系紧张，你会如何处理分歧并保持后续合作空间？ / If standing by the evidence may strain the near-term relationship, how would you handle the disagreement and preserve future collaboration?

### 数据证据与高层经验判断冲突 / Data evidence conflicts with executive intuition
保留：`bulk1000-e-066-v1`；合并：`bulk1000-e-066-v2`、`bulk1000-e-066-v3`、`bulk1000-e-066-v4`、`bulk1000-e-066-v5`
- 如果高层要求当天拍板而关键证据还不完整，你会怎样表达可信边界并争取可逆决策？ / If executives require a decision today while evidence is incomplete, how would you state confidence limits and seek a reversible choice?
- 如果关键合作方不在场且决定会影响他们，你会怎样补足上下文并确认承诺？ / If a key partner misses the discussion and the decision affects them, how would you restore context and confirm commitment?
- 如果你没有最终决定权但需要承担执行结果，你会如何影响决策并记录风险接受者？ / If you lack final decision authority but will own execution, how would you influence the choice and record who accepts the risk?
- 如果客户影响仍在扩大且各方对原因有争议，你会如何组织即时沟通和后续定责？ / If customer impact is still growing and teams disagree about the cause, how would you organize immediate communication and later accountability?
- 如果坚持事实可能让短期协作关系紧张，你会如何处理分歧并保持后续合作空间？ / If standing by the evidence may strain the near-term relationship, how would you handle the disagreement and preserve future collaboration?

### 产品与安全对上线门槛意见不一 / Product and security disagree on the launch threshold
保留：`bulk1000-e-067-v1`；合并：`bulk1000-e-067-v2`、`bulk1000-e-067-v3`、`bulk1000-e-067-v4`、`bulk1000-e-067-v5`
- 如果高层要求当天拍板而关键证据还不完整，你会怎样表达可信边界并争取可逆决策？ / If executives require a decision today while evidence is incomplete, how would you state confidence limits and seek a reversible choice?
- 如果关键合作方不在场且决定会影响他们，你会怎样补足上下文并确认承诺？ / If a key partner misses the discussion and the decision affects them, how would you restore context and confirm commitment?
- 如果你没有最终决定权但需要承担执行结果，你会如何影响决策并记录风险接受者？ / If you lack final decision authority but will own execution, how would you influence the choice and record who accepts the risk?
- 如果客户影响仍在扩大且各方对原因有争议，你会如何组织即时沟通和后续定责？ / If customer impact is still growing and teams disagree about the cause, how would you organize immediate communication and later accountability?
- 如果坚持事实可能让短期协作关系紧张，你会如何处理分歧并保持后续合作空间？ / If standing by the evidence may strain the near-term relationship, how would you handle the disagreement and preserve future collaboration?

### 跨团队服务契约谈不拢 / Teams cannot agree on a service contract
保留：`bulk1000-e-068-v1`；合并：`bulk1000-e-068-v2`、`bulk1000-e-068-v3`、`bulk1000-e-068-v4`、`bulk1000-e-068-v5`
- 如果高层要求当天拍板而关键证据还不完整，你会怎样表达可信边界并争取可逆决策？ / If executives require a decision today while evidence is incomplete, how would you state confidence limits and seek a reversible choice?
- 如果关键合作方不在场且决定会影响他们，你会怎样补足上下文并确认承诺？ / If a key partner misses the discussion and the decision affects them, how would you restore context and confirm commitment?
- 如果你没有最终决定权但需要承担执行结果，你会如何影响决策并记录风险接受者？ / If you lack final decision authority but will own execution, how would you influence the choice and record who accepts the risk?
- 如果客户影响仍在扩大且各方对原因有争议，你会如何组织即时沟通和后续定责？ / If customer impact is still growing and teams disagree about the cause, how would you organize immediate communication and later accountability?
- 如果坚持事实可能让短期协作关系紧张，你会如何处理分歧并保持后续合作空间？ / If standing by the evidence may strain the near-term relationship, how would you handle the disagreement and preserve future collaboration?

### 没有职权时推动统一指标 / Influencing a shared metric without authority
保留：`bulk1000-e-069-v1`；合并：`bulk1000-e-069-v2`、`bulk1000-e-069-v3`、`bulk1000-e-069-v4`、`bulk1000-e-069-v5`
- 如果高层要求当天拍板而关键证据还不完整，你会怎样表达可信边界并争取可逆决策？ / If executives require a decision today while evidence is incomplete, how would you state confidence limits and seek a reversible choice?
- 如果关键合作方不在场且决定会影响他们，你会怎样补足上下文并确认承诺？ / If a key partner misses the discussion and the decision affects them, how would you restore context and confirm commitment?
- 如果你没有最终决定权但需要承担执行结果，你会如何影响决策并记录风险接受者？ / If you lack final decision authority but will own execution, how would you influence the choice and record who accepts the risk?
- 如果客户影响仍在扩大且各方对原因有争议，你会如何组织即时沟通和后续定责？ / If customer impact is still growing and teams disagree about the cause, how would you organize immediate communication and later accountability?
- 如果坚持事实可能让短期协作关系紧张，你会如何处理分歧并保持后续合作空间？ / If standing by the evidence may strain the near-term relationship, how would you handle the disagreement and preserve future collaboration?

### 供应商承诺不匹配业务风险 / Vendor commitments do not match business risk
保留：`bulk1000-e-070-v1`；合并：`bulk1000-e-070-v2`、`bulk1000-e-070-v3`、`bulk1000-e-070-v4`、`bulk1000-e-070-v5`
- 如果高层要求当天拍板而关键证据还不完整，你会怎样表达可信边界并争取可逆决策？ / If executives require a decision today while evidence is incomplete, how would you state confidence limits and seek a reversible choice?
- 如果关键合作方不在场且决定会影响他们，你会怎样补足上下文并确认承诺？ / If a key partner misses the discussion and the decision affects them, how would you restore context and confirm commitment?
- 如果你没有最终决定权但需要承担执行结果，你会如何影响决策并记录风险接受者？ / If you lack final decision authority but will own execution, how would you influence the choice and record who accepts the risk?
- 如果客户影响仍在扩大且各方对原因有争议，你会如何组织即时沟通和后续定责？ / If customer impact is still growing and teams disagree about the cause, how would you organize immediate communication and later accountability?
- 如果坚持事实可能让短期协作关系紧张，你会如何处理分歧并保持后续合作空间？ / If standing by the evidence may strain the near-term relationship, how would you handle the disagreement and preserve future collaboration?

### 反馈被理解为否定而非改进建议 / Feedback heard as rejection rather than a path to improve
保留：`bulk1000-e-071-v1`；合并：`bulk1000-e-071-v2`、`bulk1000-e-071-v3`、`bulk1000-e-071-v4`、`bulk1000-e-071-v5`
- 如果高层要求当天拍板而关键证据还不完整，你会怎样表达可信边界并争取可逆决策？ / If executives require a decision today while evidence is incomplete, how would you state confidence limits and seek a reversible choice?
- 如果关键合作方不在场且决定会影响他们，你会怎样补足上下文并确认承诺？ / If a key partner misses the discussion and the decision affects them, how would you restore context and confirm commitment?
- 如果你没有最终决定权但需要承担执行结果，你会如何影响决策并记录风险接受者？ / If you lack final decision authority but will own execution, how would you influence the choice and record who accepts the risk?
- 如果客户影响仍在扩大且各方对原因有争议，你会如何组织即时沟通和后续定责？ / If customer impact is still growing and teams disagree about the cause, how would you organize immediate communication and later accountability?
- 如果坚持事实可能让短期协作关系紧张，你会如何处理分歧并保持后续合作空间？ / If standing by the evidence may strain the near-term relationship, how would you handle the disagreement and preserve future collaboration?

### 绩效问题与目标定义不清 / Performance concerns with unclear goals
保留：`bulk1000-f-072-v1`；合并：`bulk1000-f-072-v2`、`bulk1000-f-072-v3`、`bulk1000-f-072-v4`、`bulk1000-f-072-v5`
- 如果团队连续流失关键成员且负荷已上升，你会如何区分个人问题和组织信号？ / If several key people leave and workload is rising, how would you distinguish individual issues from organizational signals?
- 如果多个管理者对同一成员给出相反评价，你会怎样校准证据并避免凭印象定级？ / If managers assess the same person differently, how would you calibrate evidence and avoid impression-based leveling?
- 如果一个季度内组织即将调整，你会如何做岗位、汇报线和权限的过渡设计？ / If the organization will change this quarter, how would you design the transition of roles, reporting lines, and decision rights?
- 如果候选继任者只有短期代理经验，你会如何设计受控授权和风险兜底？ / If a possible successor has only brief acting experience, how would you design bounded delegation and risk coverage?
- 如果关键成员拒绝管理职责但团队确有负责人缺口，你会如何探索替代路径而不强迫晋升？ / If a key contributor declines management but the team needs an owner, how would you explore alternatives without forcing a promotion?

### 高绩效成员形成团队依赖 / A high performer creates team dependency
保留：`bulk1000-f-073-v1`；合并：`bulk1000-f-073-v2`、`bulk1000-f-073-v3`、`bulk1000-f-073-v4`、`bulk1000-f-073-v5`
- 如果团队连续流失关键成员且负荷已上升，你会如何区分个人问题和组织信号？ / If several key people leave and workload is rising, how would you distinguish individual issues from organizational signals?
- 如果多个管理者对同一成员给出相反评价，你会怎样校准证据并避免凭印象定级？ / If managers assess the same person differently, how would you calibrate evidence and avoid impression-based leveling?
- 如果一个季度内组织即将调整，你会如何做岗位、汇报线和权限的过渡设计？ / If the organization will change this quarter, how would you design the transition of roles, reporting lines, and decision rights?
- 如果候选继任者只有短期代理经验，你会如何设计受控授权和风险兜底？ / If a possible successor has only brief acting experience, how would you design bounded delegation and risk coverage?
- 如果关键成员拒绝管理职责但团队确有负责人缺口，你会如何探索替代路径而不强迫晋升？ / If a key contributor declines management but the team needs an owner, how would you explore alternatives without forcing a promotion?

### 二线负责人只上报好消息 / A second-line leader reports only good news
保留：`bulk1000-f-074-v1`；合并：`bulk1000-f-074-v2`、`bulk1000-f-074-v3`、`bulk1000-f-074-v4`、`bulk1000-f-074-v5`
- 如果团队连续流失关键成员且负荷已上升，你会如何区分个人问题和组织信号？ / If several key people leave and workload is rising, how would you distinguish individual issues from organizational signals?
- 如果多个管理者对同一成员给出相反评价，你会怎样校准证据并避免凭印象定级？ / If managers assess the same person differently, how would you calibrate evidence and avoid impression-based leveling?
- 如果一个季度内组织即将调整，你会如何做岗位、汇报线和权限的过渡设计？ / If the organization will change this quarter, how would you design the transition of roles, reporting lines, and decision rights?
- 如果候选继任者只有短期代理经验，你会如何设计受控授权和风险兜底？ / If a possible successor has only brief acting experience, how would you design bounded delegation and risk coverage?
- 如果关键成员拒绝管理职责但团队确有负责人缺口，你会如何探索替代路径而不强迫晋升？ / If a key contributor declines management but the team needs an owner, how would you explore alternatives without forcing a promotion?

### 团队局部最优损害组织目标 / Local team optimization harms organization goals
保留：`bulk1000-f-075-v1`；合并：`bulk1000-f-075-v2`、`bulk1000-f-075-v3`、`bulk1000-f-075-v4`、`bulk1000-f-075-v5`
- 如果团队连续流失关键成员且负荷已上升，你会如何区分个人问题和组织信号？ / If several key people leave and workload is rising, how would you distinguish individual issues from organizational signals?
- 如果多个管理者对同一成员给出相反评价，你会怎样校准证据并避免凭印象定级？ / If managers assess the same person differently, how would you calibrate evidence and avoid impression-based leveling?
- 如果一个季度内组织即将调整，你会如何做岗位、汇报线和权限的过渡设计？ / If the organization will change this quarter, how would you design the transition of roles, reporting lines, and decision rights?
- 如果候选继任者只有短期代理经验，你会如何设计受控授权和风险兜底？ / If a possible successor has only brief acting experience, how would you design bounded delegation and risk coverage?
- 如果关键成员拒绝管理职责但团队确有负责人缺口，你会如何探索替代路径而不强迫晋升？ / If a key contributor declines management but the team needs an owner, how would you explore alternatives without forcing a promotion?

### 团队边界与系统边界不匹配 / Team boundaries do not match system boundaries
保留：`bulk1000-f-076-v1`；合并：`bulk1000-f-076-v2`、`bulk1000-f-076-v3`、`bulk1000-f-076-v4`、`bulk1000-f-076-v5`
- 如果团队连续流失关键成员且负荷已上升，你会如何区分个人问题和组织信号？ / If several key people leave and workload is rising, how would you distinguish individual issues from organizational signals?
- 如果多个管理者对同一成员给出相反评价，你会怎样校准证据并避免凭印象定级？ / If managers assess the same person differently, how would you calibrate evidence and avoid impression-based leveling?
- 如果一个季度内组织即将调整，你会如何做岗位、汇报线和权限的过渡设计？ / If the organization will change this quarter, how would you design the transition of roles, reporting lines, and decision rights?
- 如果候选继任者只有短期代理经验，你会如何设计受控授权和风险兜底？ / If a possible successor has only brief acting experience, how would you design bounded delegation and risk coverage?
- 如果关键成员拒绝管理职责但团队确有负责人缺口，你会如何探索替代路径而不强迫晋升？ / If a key contributor declines management but the team needs an owner, how would you explore alternatives without forcing a promotion?

### 合并团队后的责任模糊 / Ownership ambiguity after team consolidation
保留：`bulk1000-f-077-v1`；合并：`bulk1000-f-077-v2`、`bulk1000-f-077-v3`、`bulk1000-f-077-v4`、`bulk1000-f-077-v5`
- 如果团队连续流失关键成员且负荷已上升，你会如何区分个人问题和组织信号？ / If several key people leave and workload is rising, how would you distinguish individual issues from organizational signals?
- 如果多个管理者对同一成员给出相反评价，你会怎样校准证据并避免凭印象定级？ / If managers assess the same person differently, how would you calibrate evidence and avoid impression-based leveling?
- 如果一个季度内组织即将调整，你会如何做岗位、汇报线和权限的过渡设计？ / If the organization will change this quarter, how would you design the transition of roles, reporting lines, and decision rights?
- 如果候选继任者只有短期代理经验，你会如何设计受控授权和风险兜底？ / If a possible successor has only brief acting experience, how would you design bounded delegation and risk coverage?
- 如果关键成员拒绝管理职责但团队确有负责人缺口，你会如何探索替代路径而不强迫晋升？ / If a key contributor declines management but the team needs an owner, how would you explore alternatives without forcing a promotion?

### 岗位画像过度依赖履历关键词 / Role profile overweights résumé keywords
保留：`bulk1000-f-078-v1`；合并：`bulk1000-f-078-v2`、`bulk1000-f-078-v3`、`bulk1000-f-078-v4`、`bulk1000-f-078-v5`
- 如果团队连续流失关键成员且负荷已上升，你会如何区分个人问题和组织信号？ / If several key people leave and workload is rising, how would you distinguish individual issues from organizational signals?
- 如果多个管理者对同一成员给出相反评价，你会怎样校准证据并避免凭印象定级？ / If managers assess the same person differently, how would you calibrate evidence and avoid impression-based leveling?
- 如果一个季度内组织即将调整，你会如何做岗位、汇报线和权限的过渡设计？ / If the organization will change this quarter, how would you design the transition of roles, reporting lines, and decision rights?
- 如果候选继任者只有短期代理经验，你会如何设计受控授权和风险兜底？ / If a possible successor has only brief acting experience, how would you design bounded delegation and risk coverage?
- 如果关键成员拒绝管理职责但团队确有负责人缺口，你会如何探索替代路径而不强迫晋升？ / If a key contributor declines management but the team needs an owner, how would you explore alternatives without forcing a promotion?

### 面试官之间证据标准不一致 / Interviewers use inconsistent evidence standards
保留：`bulk1000-f-079-v1`；合并：`bulk1000-f-079-v2`、`bulk1000-f-079-v3`、`bulk1000-f-079-v4`、`bulk1000-f-079-v5`
- 如果团队连续流失关键成员且负荷已上升，你会如何区分个人问题和组织信号？ / If several key people leave and workload is rising, how would you distinguish individual issues from organizational signals?
- 如果多个管理者对同一成员给出相反评价，你会怎样校准证据并避免凭印象定级？ / If managers assess the same person differently, how would you calibrate evidence and avoid impression-based leveling?
- 如果一个季度内组织即将调整，你会如何做岗位、汇报线和权限的过渡设计？ / If the organization will change this quarter, how would you design the transition of roles, reporting lines, and decision rights?
- 如果候选继任者只有短期代理经验，你会如何设计受控授权和风险兜底？ / If a possible successor has only brief acting experience, how would you design bounded delegation and risk coverage?
- 如果关键成员拒绝管理职责但团队确有负责人缺口，你会如何探索替代路径而不强迫晋升？ / If a key contributor declines management but the team needs an owner, how would you explore alternatives without forcing a promotion?

### 培养计划有活动没有行为变化 / Development plans contain activities but no behavior change
保留：`bulk1000-f-080-v1`；合并：`bulk1000-f-080-v2`、`bulk1000-f-080-v3`、`bulk1000-f-080-v4`、`bulk1000-f-080-v5`
- 如果团队连续流失关键成员且负荷已上升，你会如何区分个人问题和组织信号？ / If several key people leave and workload is rising, how would you distinguish individual issues from organizational signals?
- 如果多个管理者对同一成员给出相反评价，你会怎样校准证据并避免凭印象定级？ / If managers assess the same person differently, how would you calibrate evidence and avoid impression-based leveling?
- 如果一个季度内组织即将调整，你会如何做岗位、汇报线和权限的过渡设计？ / If the organization will change this quarter, how would you design the transition of roles, reporting lines, and decision rights?
- 如果候选继任者只有短期代理经验，你会如何设计受控授权和风险兜底？ / If a possible successor has only brief acting experience, how would you design bounded delegation and risk coverage?
- 如果关键成员拒绝管理职责但团队确有负责人缺口，你会如何探索替代路径而不强迫晋升？ / If a key contributor declines management but the team needs an owner, how would you explore alternatives without forcing a promotion?

### 晋升材料与岗位责任范围不匹配 / Promotion evidence mismatches role scope
保留：`bulk1000-f-081-v1`；合并：`bulk1000-f-081-v2`、`bulk1000-f-081-v3`、`bulk1000-f-081-v4`、`bulk1000-f-081-v5`
- 如果团队连续流失关键成员且负荷已上升，你会如何区分个人问题和组织信号？ / If several key people leave and workload is rising, how would you distinguish individual issues from organizational signals?
- 如果多个管理者对同一成员给出相反评价，你会怎样校准证据并避免凭印象定级？ / If managers assess the same person differently, how would you calibrate evidence and avoid impression-based leveling?
- 如果一个季度内组织即将调整，你会如何做岗位、汇报线和权限的过渡设计？ / If the organization will change this quarter, how would you design the transition of roles, reporting lines, and decision rights?
- 如果候选继任者只有短期代理经验，你会如何设计受控授权和风险兜底？ / If a possible successor has only brief acting experience, how would you design bounded delegation and risk coverage?
- 如果关键成员拒绝管理职责但团队确有负责人缺口，你会如何探索替代路径而不强迫晋升？ / If a key contributor declines management but the team needs an owner, how would you explore alternatives without forcing a promotion?

### 关键职责长期只有一人能承担 / A critical responsibility has only one capable owner
保留：`bulk1000-f-082-v1`；合并：`bulk1000-f-082-v2`、`bulk1000-f-082-v3`、`bulk1000-f-082-v4`、`bulk1000-f-082-v5`
- 如果团队连续流失关键成员且负荷已上升，你会如何区分个人问题和组织信号？ / If several key people leave and workload is rising, how would you distinguish individual issues from organizational signals?
- 如果多个管理者对同一成员给出相反评价，你会怎样校准证据并避免凭印象定级？ / If managers assess the same person differently, how would you calibrate evidence and avoid impression-based leveling?
- 如果一个季度内组织即将调整，你会如何做岗位、汇报线和权限的过渡设计？ / If the organization will change this quarter, how would you design the transition of roles, reporting lines, and decision rights?
- 如果候选继任者只有短期代理经验，你会如何设计受控授权和风险兜底？ / If a possible successor has only brief acting experience, how would you design bounded delegation and risk coverage?
- 如果关键成员拒绝管理职责但团队确有负责人缺口，你会如何探索替代路径而不强迫晋升？ / If a key contributor declines management but the team needs an owner, how would you explore alternatives without forcing a promotion?

### 授权后仍频繁收回决定权 / Decision rights repeatedly reclaimed after delegation
保留：`bulk1000-f-083-v1`；合并：`bulk1000-f-083-v2`、`bulk1000-f-083-v3`、`bulk1000-f-083-v4`、`bulk1000-f-083-v5`
- 如果团队连续流失关键成员且负荷已上升，你会如何区分个人问题和组织信号？ / If several key people leave and workload is rising, how would you distinguish individual issues from organizational signals?
- 如果多个管理者对同一成员给出相反评价，你会怎样校准证据并避免凭印象定级？ / If managers assess the same person differently, how would you calibrate evidence and avoid impression-based leveling?
- 如果一个季度内组织即将调整，你会如何做岗位、汇报线和权限的过渡设计？ / If the organization will change this quarter, how would you design the transition of roles, reporting lines, and decision rights?
- 如果候选继任者只有短期代理经验，你会如何设计受控授权和风险兜底？ / If a possible successor has only brief acting experience, how would you design bounded delegation and risk coverage?
- 如果关键成员拒绝管理职责但团队确有负责人缺口，你会如何探索替代路径而不强迫晋升？ / If a key contributor declines management but the team needs an owner, how would you explore alternatives without forcing a promotion?

### 从陌生领域迁移已有知识 / Transferring knowledge into an unfamiliar field
保留：`bulk1000-g-084-v1`；合并：`bulk1000-g-084-v2`、`bulk1000-g-084-v3`、`bulk1000-g-084-v4`、`bulk1000-g-084-v5`
- 如果可用于学习的时间被压缩，你会如何选择最小练习并仍然验证能力变化？ / If learning time is sharply reduced, how would you choose a minimal practice while still verifying capability change?
- 如果反馈与你的自我判断冲突，你会怎样核对事实、寻找反例并设定下一次观察？ / If feedback conflicts with your self-assessment, how would you check facts, seek counterexamples, and define the next observation?
- 如果失败已经影响他人对你的信任，你会如何先修复影响，再恢复可验证的责任？ / If a visible failure has affected trust, how would you repair the impact first and then rebuild verifiable accountability?
- 如果熟悉的方法在新环境失效，你会如何识别旧假设并构造低成本试验？ / If a familiar method fails in a new context, how would you identify old assumptions and create a low-cost experiment?
- 如果目标长期没有外部检查点，你会如何建立自我反馈和停止调整机制？ / If a goal has no external checkpoint for a long time, how would you create self-feedback and a stopping or adjustment rule?

### 学习成果没有转化为工作改进 / Learning has not changed work outcomes
保留：`bulk1000-g-085-v1`；合并：`bulk1000-g-085-v2`、`bulk1000-g-085-v3`、`bulk1000-g-085-v4`、`bulk1000-g-085-v5`
- 如果可用于学习的时间被压缩，你会如何选择最小练习并仍然验证能力变化？ / If learning time is sharply reduced, how would you choose a minimal practice while still verifying capability change?
- 如果反馈与你的自我判断冲突，你会怎样核对事实、寻找反例并设定下一次观察？ / If feedback conflicts with your self-assessment, how would you check facts, seek counterexamples, and define the next observation?
- 如果失败已经影响他人对你的信任，你会如何先修复影响，再恢复可验证的责任？ / If a visible failure has affected trust, how would you repair the impact first and then rebuild verifiable accountability?
- 如果熟悉的方法在新环境失效，你会如何识别旧假设并构造低成本试验？ / If a familiar method fails in a new context, how would you identify old assumptions and create a low-cost experiment?
- 如果目标长期没有外部检查点，你会如何建立自我反馈和停止调整机制？ / If a goal has no external checkpoint for a long time, how would you create self-feedback and a stopping or adjustment rule?

### 决策结果好但过程依赖偶然 / A good outcome produced by a fragile decision process
保留：`bulk1000-g-086-v1`；合并：`bulk1000-g-086-v2`、`bulk1000-g-086-v3`、`bulk1000-g-086-v4`、`bulk1000-g-086-v5`
- 如果可用于学习的时间被压缩，你会如何选择最小练习并仍然验证能力变化？ / If learning time is sharply reduced, how would you choose a minimal practice while still verifying capability change?
- 如果反馈与你的自我判断冲突，你会怎样核对事实、寻找反例并设定下一次观察？ / If feedback conflicts with your self-assessment, how would you check facts, seek counterexamples, and define the next observation?
- 如果失败已经影响他人对你的信任，你会如何先修复影响，再恢复可验证的责任？ / If a visible failure has affected trust, how would you repair the impact first and then rebuild verifiable accountability?
- 如果熟悉的方法在新环境失效，你会如何识别旧假设并构造低成本试验？ / If a familiar method fails in a new context, how would you identify old assumptions and create a low-cost experiment?
- 如果目标长期没有外部检查点，你会如何建立自我反馈和停止调整机制？ / If a goal has no external checkpoint for a long time, how would you create self-feedback and a stopping or adjustment rule?

### 复盘行动项反复逾期 / Retrospective actions repeatedly overdue
保留：`bulk1000-g-087-v1`；合并：`bulk1000-g-087-v2`、`bulk1000-g-087-v3`、`bulk1000-g-087-v4`、`bulk1000-g-087-v5`
- 如果可用于学习的时间被压缩，你会如何选择最小练习并仍然验证能力变化？ / If learning time is sharply reduced, how would you choose a minimal practice while still verifying capability change?
- 如果反馈与你的自我判断冲突，你会怎样核对事实、寻找反例并设定下一次观察？ / If feedback conflicts with your self-assessment, how would you check facts, seek counterexamples, and define the next observation?
- 如果失败已经影响他人对你的信任，你会如何先修复影响，再恢复可验证的责任？ / If a visible failure has affected trust, how would you repair the impact first and then rebuild verifiable accountability?
- 如果熟悉的方法在新环境失效，你会如何识别旧假设并构造低成本试验？ / If a familiar method fails in a new context, how would you identify old assumptions and create a low-cost experiment?
- 如果目标长期没有外部检查点，你会如何建立自我反馈和停止调整机制？ / If a goal has no external checkpoint for a long time, how would you create self-feedback and a stopping or adjustment rule?

### 重大挫折后恢复工作节奏 / Recovering work rhythm after a major setback
保留：`bulk1000-g-088-v1`；合并：`bulk1000-g-088-v2`、`bulk1000-g-088-v3`、`bulk1000-g-088-v4`、`bulk1000-g-088-v5`
- 如果可用于学习的时间被压缩，你会如何选择最小练习并仍然验证能力变化？ / If learning time is sharply reduced, how would you choose a minimal practice while still verifying capability change?
- 如果反馈与你的自我判断冲突，你会怎样核对事实、寻找反例并设定下一次观察？ / If feedback conflicts with your self-assessment, how would you check facts, seek counterexamples, and define the next observation?
- 如果失败已经影响他人对你的信任，你会如何先修复影响，再恢复可验证的责任？ / If a visible failure has affected trust, how would you repair the impact first and then rebuild verifiable accountability?
- 如果熟悉的方法在新环境失效，你会如何识别旧假设并构造低成本试验？ / If a familiar method fails in a new context, how would you identify old assumptions and create a low-cost experiment?
- 如果目标长期没有外部检查点，你会如何建立自我反馈和停止调整机制？ / If a goal has no external checkpoint for a long time, how would you create self-feedback and a stopping or adjustment rule?

### 连续受挫时何时求助 / When to ask for help after repeated setbacks
保留：`bulk1000-g-089-v1`；合并：`bulk1000-g-089-v2`、`bulk1000-g-089-v3`、`bulk1000-g-089-v4`、`bulk1000-g-089-v5`
- 如果可用于学习的时间被压缩，你会如何选择最小练习并仍然验证能力变化？ / If learning time is sharply reduced, how would you choose a minimal practice while still verifying capability change?
- 如果反馈与你的自我判断冲突，你会怎样核对事实、寻找反例并设定下一次观察？ / If feedback conflicts with your self-assessment, how would you check facts, seek counterexamples, and define the next observation?
- 如果失败已经影响他人对你的信任，你会如何先修复影响，再恢复可验证的责任？ / If a visible failure has affected trust, how would you repair the impact first and then rebuild verifiable accountability?
- 如果熟悉的方法在新环境失效，你会如何识别旧假设并构造低成本试验？ / If a familiar method fails in a new context, how would you identify old assumptions and create a low-cost experiment?
- 如果目标长期没有外部检查点，你会如何建立自我反馈和停止调整机制？ / If a goal has no external checkpoint for a long time, how would you create self-feedback and a stopping or adjustment rule?

### 没有明确指令时设定工作方向 / Setting direction without explicit instructions
保留：`bulk1000-g-090-v1`；合并：`bulk1000-g-090-v2`、`bulk1000-g-090-v3`、`bulk1000-g-090-v4`、`bulk1000-g-090-v5`
- 如果可用于学习的时间被压缩，你会如何选择最小练习并仍然验证能力变化？ / If learning time is sharply reduced, how would you choose a minimal practice while still verifying capability change?
- 如果反馈与你的自我判断冲突，你会怎样核对事实、寻找反例并设定下一次观察？ / If feedback conflicts with your self-assessment, how would you check facts, seek counterexamples, and define the next observation?
- 如果失败已经影响他人对你的信任，你会如何先修复影响，再恢复可验证的责任？ / If a visible failure has affected trust, how would you repair the impact first and then rebuild verifiable accountability?
- 如果熟悉的方法在新环境失效，你会如何识别旧假设并构造低成本试验？ / If a familiar method fails in a new context, how would you identify old assumptions and create a low-cost experiment?
- 如果目标长期没有外部检查点，你会如何建立自我反馈和停止调整机制？ / If a goal has no external checkpoint for a long time, how would you create self-feedback and a stopping or adjustment rule?

### 长期目标被即时事务不断打断 / Long-term goals repeatedly displaced by urgent work
保留：`bulk1000-g-091-v1`；合并：`bulk1000-g-091-v2`、`bulk1000-g-091-v3`、`bulk1000-g-091-v4`、`bulk1000-g-091-v5`
- 如果可用于学习的时间被压缩，你会如何选择最小练习并仍然验证能力变化？ / If learning time is sharply reduced, how would you choose a minimal practice while still verifying capability change?
- 如果反馈与你的自我判断冲突，你会怎样核对事实、寻找反例并设定下一次观察？ / If feedback conflicts with your self-assessment, how would you check facts, seek counterexamples, and define the next observation?
- 如果失败已经影响他人对你的信任，你会如何先修复影响，再恢复可验证的责任？ / If a visible failure has affected trust, how would you repair the impact first and then rebuild verifiable accountability?
- 如果熟悉的方法在新环境失效，你会如何识别旧假设并构造低成本试验？ / If a familiar method fails in a new context, how would you identify old assumptions and create a low-cost experiment?
- 如果目标长期没有外部检查点，你会如何建立自我反馈和停止调整机制？ / If a goal has no external checkpoint for a long time, how would you create self-feedback and a stopping or adjustment rule?

### 没有明确负责人的关键缺口 / A critical gap with no named owner
保留：`bulk1000-h-092-v1`；合并：`bulk1000-h-092-v2`、`bulk1000-h-092-v3`、`bulk1000-h-092-v4`、`bulk1000-h-092-v5`
- 如果发现的缺口依赖另一团队处理而对方拒绝接手，你会怎样推动明确负责人、期限和升级路径？ / If a gap depends on another team that refuses ownership, how would you establish an owner, deadline, and escalation path?
- 如果你多次临时补位后团队开始默认由你负责，你会如何恢复清晰责任并保证交付不断档？ / If repeated temporary coverage makes the team assume you are the permanent owner, how would you restore clear ownership without dropping delivery?
- 如果解决问题需要调度你无权分配的人员和预算，你会怎样把风险转化为可决策的请求？ / If resolving the issue requires people and budget you cannot assign, how would you turn the risk into a decision-ready request?
- 如果短期目标已经达成但后续影响无人监控，你会怎样确定退出、移交和复查条件？ / If the short-term goal is met but no one tracks lasting effects, how would you define exit, handoff, and review conditions?
- 如果问题不属于你的职责却可能直接伤害用户，你会采取什么最小行动并如何交还责任？ / If the issue is outside your role but may directly harm users, what minimum action would you take and how would you hand ownership back?

### 结果不达标时的责任边界 / Ownership when outcomes miss the target
保留：`bulk1000-h-093-v1`；合并：`bulk1000-h-093-v2`、`bulk1000-h-093-v3`、`bulk1000-h-093-v4`、`bulk1000-h-093-v5`
- 如果发现的缺口依赖另一团队处理而对方拒绝接手，你会怎样推动明确负责人、期限和升级路径？ / If a gap depends on another team that refuses ownership, how would you establish an owner, deadline, and escalation path?
- 如果你多次临时补位后团队开始默认由你负责，你会如何恢复清晰责任并保证交付不断档？ / If repeated temporary coverage makes the team assume you are the permanent owner, how would you restore clear ownership without dropping delivery?
- 如果解决问题需要调度你无权分配的人员和预算，你会怎样把风险转化为可决策的请求？ / If resolving the issue requires people and budget you cannot assign, how would you turn the risk into a decision-ready request?
- 如果短期目标已经达成但后续影响无人监控，你会怎样确定退出、移交和复查条件？ / If the short-term goal is met but no one tracks lasting effects, how would you define exit, handoff, and review conditions?
- 如果问题不属于你的职责却可能直接伤害用户，你会采取什么最小行动并如何交还责任？ / If the issue is outside your role but may directly harm users, what minimum action would you take and how would you hand ownership back?

### 发现早期报告遗漏了重要风险 / A material risk was omitted from an early report
保留：`bulk1000-h-094-v1`；合并：`bulk1000-h-094-v2`、`bulk1000-h-094-v3`、`bulk1000-h-094-v4`、`bulk1000-h-094-v5`
- 如果指标结果不利且汇报截止时间已到，你会如何呈现不完整证据而不把猜测包装成结论？ / If the metric is unfavorable and the report is due, how would you present incomplete evidence without dressing guesses up as conclusions?
- 如果错误来自自己的实现且已经影响客户数据，你会先做哪些披露、止损和修复？ / If your implementation caused an error that affected customer data, what disclosure, containment, and correction would you do first?
- 如果团队惯例是不在周报里写一个已知风险以免影响目标，你会怎样提出并纠正？ / If the team routinely omits a known risk from status reports to protect targets, how would you raise and correct it?
- 如果你支持的结论与另一组可信证据矛盾，你会如何保留分歧并安排复核？ / If a credible evidence set contradicts the conclusion you support, how would you preserve the disagreement and arrange review?
- 如果商业团队要求把有限样本的结果推广到所有客户，你会怎样界定可以公开表达的结论？ / If the business asks you to generalize a small sample to all customers, how would you bound the claim you can make?

### 压力下要求美化实验结果 / Pressure to make experiment results look better
保留：`bulk1000-h-095-v1`；合并：`bulk1000-h-095-v2`、`bulk1000-h-095-v3`、`bulk1000-h-095-v4`、`bulk1000-h-095-v5`
- 如果指标结果不利且汇报截止时间已到，你会如何呈现不完整证据而不把猜测包装成结论？ / If the metric is unfavorable and the report is due, how would you present incomplete evidence without dressing guesses up as conclusions?
- 如果错误来自自己的实现且已经影响客户数据，你会先做哪些披露、止损和修复？ / If your implementation caused an error that affected customer data, what disclosure, containment, and correction would you do first?
- 如果团队惯例是不在周报里写一个已知风险以免影响目标，你会怎样提出并纠正？ / If the team routinely omits a known risk from status reports to protect targets, how would you raise and correct it?
- 如果你支持的结论与另一组可信证据矛盾，你会如何保留分歧并安排复核？ / If a credible evidence set contradicts the conclusion you support, how would you preserve the disagreement and arrange review?
- 如果商业团队要求把有限样本的结果推广到所有客户，你会怎样界定可以公开表达的结论？ / If the business asks you to generalize a small sample to all customers, how would you bound the claim you can make?

### 跨团队成果中的个人贡献说明 / Explaining personal contribution in cross-team work
保留：`bulk1000-h-096-v1`；合并：`bulk1000-h-096-v2`、`bulk1000-h-096-v3`、`bulk1000-h-096-v4`、`bulk1000-h-096-v5`
- 如果项目没有持续记录决策和分工，你会用哪些可核验材料还原个人与团队贡献？ / If the project did not consistently record decisions and roles, what verifiable material would you use to reconstruct individual and team contributions?
- 如果贡献者对成果归属有分歧且晋升机会有限，你会如何组织事实校准并避免零和争夺？ / If contributors disagree about credit and promotion opportunities are limited, how would you calibrate facts without creating a zero-sum contest?
- 如果复盘中有人只认领成功部分、把失败归给团队，你会怎样重建完整的贡献与决策链？ / If someone claims only the success and attributes failure to the team, how would you reconstruct the full contribution and decision chain?
- 如果高层汇报只能放一页且协作者的关键作用被省略，你会怎样简洁呈现共同成果和自己的责任？ / If a one-page executive update omits collaborators’ key work, how would you concisely represent shared outcomes and your own responsibility?
- 如果外部奖项只能提交一个负责人，而成果由多人共同完成，你会如何处理提名和贡献说明？ / If an external award allows only one named owner for work delivered by many people, how would you handle nomination and contribution disclosure?

### 职责外风险应否介入 / Whether to intervene in a risk outside your remit
保留：`bulk1000-h-097-v1`；合并：`bulk1000-h-097-v2`、`bulk1000-h-097-v3`、`bulk1000-h-097-v4`、`bulk1000-h-097-v5`
- 如果你无权暂停流程但等待授权会扩大用户伤害，你会怎样采取比例适当的措施并升级？ / If you cannot stop the process but waiting for authority could worsen user harm, how would you take proportionate action and escalate?
- 如果目标要求会牺牲安全、隐私或数据真实性，你会如何明确不能妥协的底线并提供替代方案？ / If a target would compromise safety, privacy, or data integrity, how would you state the boundary and offer an alternative?
- 如果你被要求对结果负责但关键人员和决策权都不在你手里，你会怎样澄清授权条件？ / If you are accountable for an outcome without authority over key people or decisions, how would you clarify the conditions for ownership?
- 如果合作团队反复把紧急任务推给你，挤占原有责任，你会如何设立边界并协商服务约定？ / If partner teams repeatedly route urgent work to you and displace existing responsibilities, how would you set boundaries and negotiate a service agreement?
- 如果解决问题需要接触敏感信息但并非所有字段都必要，你会如何限定访问范围并保留审计？ / If solving the problem requires sensitive data but not every field, how would you minimize access and preserve auditability?

### 岗位口头承诺与实际工作不符 / Role promises differ from actual work
保留：`bulk1000-h-098-v1`；合并：`bulk1000-h-098-v2`、`bulk1000-h-098-v3`、`bulk1000-h-098-v4`、`bulk1000-h-098-v5`
- 如果职位的实际决策权显著低于招聘时描述，你会如何确认差距并提出可验证的调整？ / If actual decision authority is far below what hiring described, how would you confirm the gap and propose a verifiable adjustment?
- 如果绩效目标长期依赖加班而非偶发峰值，你会怎样讨论工作方式和目标重设？ / If performance goals depend on overtime as a norm rather than a rare peak, how would you discuss work practices and reset goals?
- 如果团队偏好高频同步而你需要长时间专注才能完成工作，你会怎样协商协作节奏并判断双方是否匹配？ / If the team prefers frequent syncs while you need focused time, how would you negotiate cadence and judge whether the fit works for both sides?
- 如果岗位未来的晋升路径与你想发展的专业方向分叉，你会怎样评估留任、转岗或离开的条件？ / If the role’s promotion path diverges from your professional goals, how would you assess conditions for staying, transferring, or leaving?
- 如果激励机制鼓励短期指标却损害长期客户价值，你会如何讨论个人选择与组织改进？ / If incentives reward short-term metrics at the cost of lasting customer value, how would you discuss your own choices and organizational change?

### 团队文化要求与个人底线冲突 / Team norms conflict with personal boundaries
保留：`bulk1000-h-099-v1`；合并：`bulk1000-h-099-v2`、`bulk1000-h-099-v3`、`bulk1000-h-099-v4`、`bulk1000-h-099-v5`
- 如果职位的实际决策权显著低于招聘时描述，你会如何确认差距并提出可验证的调整？ / If actual decision authority is far below what hiring described, how would you confirm the gap and propose a verifiable adjustment?
- 如果绩效目标长期依赖加班而非偶发峰值，你会怎样讨论工作方式和目标重设？ / If performance goals depend on overtime as a norm rather than a rare peak, how would you discuss work practices and reset goals?
- 如果团队偏好高频同步而你需要长时间专注才能完成工作，你会怎样协商协作节奏并判断双方是否匹配？ / If the team prefers frequent syncs while you need focused time, how would you negotiate cadence and judge whether the fit works for both sides?
- 如果岗位未来的晋升路径与你想发展的专业方向分叉，你会怎样评估留任、转岗或离开的条件？ / If the role’s promotion path diverges from your professional goals, how would you assess conditions for staying, transferring, or leaving?
- 如果激励机制鼓励短期指标却损害长期客户价值，你会如何讨论个人选择与组织改进？ / If incentives reward short-term metrics at the cost of lasting customer value, how would you discuss your own choices and organizational change?

### 授权范围模糊时如何升级 / Escalating when delegated authority is unclear
保留：`bulk1000-h-100-v1`；合并：`bulk1000-h-100-v2`、`bulk1000-h-100-v3`、`bulk1000-h-100-v4`、`bulk1000-h-100-v5`
- 如果你无权暂停流程但等待授权会扩大用户伤害，你会怎样采取比例适当的措施并升级？ / If you cannot stop the process but waiting for authority could worsen user harm, how would you take proportionate action and escalate?
- 如果目标要求会牺牲安全、隐私或数据真实性，你会如何明确不能妥协的底线并提供替代方案？ / If a target would compromise safety, privacy, or data integrity, how would you state the boundary and offer an alternative?
- 如果你被要求对结果负责但关键人员和决策权都不在你手里，你会怎样澄清授权条件？ / If you are accountable for an outcome without authority over key people or decisions, how would you clarify the conditions for ownership?
- 如果合作团队反复把紧急任务推给你，挤占原有责任，你会如何设立边界并协商服务约定？ / If partner teams repeatedly route urgent work to you and displace existing responsibilities, how would you set boundaries and negotiate a service agreement?
- 如果解决问题需要接触敏感信息但并非所有字段都必要，你会如何限定访问范围并保留审计？ / If solving the problem requires sensitive data but not every field, how would you minimize access and preserve auditability?
