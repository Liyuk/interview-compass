# 全量题目逐题复核进度

更新时间：2026-10-20

## 范围与原则

`origin/main` 基线包含 1,334 个唯一 `questionId`、2,668 份中英文题目记录：100 道 `core`，1,234 道 `extended`。复核按批次完成，每批最多 100 个唯一题目；每道题均检查中英文记录。先复核全部 100 道核心题，再按 `questionId` 排序复核其余 1,234 道扩展题。批次顺序与范围固定，直到 1,334 道全部有逐题结论。

判定标准参见 [`docs/content-style-guide.md`](../content-style-guide.md) 和用户明确表达的思路：先查明事实及限制，再定位问题，最后审视方案效用、效果标准、度量或可验证影响。核心题按完整 core 规范审核；扩展题不因缺少 core 专用字段被自动判失败，而按题目本身是否清楚、准确、可供判断及双语/来源是否可靠来审核。`PASS`/`REVISE` 是首轮内容复核结论。首轮发现的 194 道 `REVISE` 题目已完成修订并通过验收，详见[修订与验收记录](2026-10-20-question-review-remediation.md)。

## 批次进度

| 批次 | 范围 | 已复核 | 结论 | 报告 |
|---:|---|---:|---|---|
| 01 | 100 道 core | 100/100 | 91 PASS，9 REVISE | [批次 01](2026-10-20-question-review-batch-01.md) |
| 02 | 按 questionId 排序的首 100 道 extended | 100/100 | 87 PASS，13 REVISE | [批次 02](2026-10-20-question-review-batch-02.md) |
| 03 | 按 questionId 排序的第 101–200 道 extended | 100/100 | 87 PASS，13 REVISE | [批次 03](2026-10-20-question-review-batch-03.md) |
| 04 | 按 questionId 排序的第 201–300 道 extended | 100/100 | 86 PASS，14 REVISE | [批次 04](2026-10-20-question-review-batch-04.md) |
| 05 | 按 questionId 排序的第 301–400 道 extended | 100/100 | 72 PASS，28 REVISE | [批次 05](2026-10-20-question-review-batch-05.md) |
| 06 | 按 questionId 排序的第 401–500 道 extended | 100/100 | 82 PASS，18 REVISE | [批次 06](2026-10-20-question-review-batch-06.md) |
| 07 | 按 questionId 排序的第 501–600 道 extended | 100/100 | 90 PASS，10 REVISE | [批次 07](2026-10-20-question-review-batch-07.md) |
| 08 | 按 questionId 排序的第 601–700 道 extended | 100/100 | 88 PASS，12 REVISE | [批次 08](2026-10-20-question-review-batch-08.md) |
| 09 | 按 questionId 排序的第 701–800 道 extended | 100/100 | 86 PASS，14 REVISE | [批次 09](2026-10-20-question-review-batch-09.md) |
| 10 | 按 questionId 排序的第 801–900 道 extended | 100/100 | 87 PASS，13 REVISE | [批次 10](2026-10-20-question-review-batch-10.md) |
| 11 | 按 questionId 排序的第 901–1,000 道 extended | 100/100 | 88 PASS，12 REVISE | [批次 11](2026-10-20-question-review-batch-11.md) |
| 12 | 按 questionId 排序的第 1,001–1,100 道 extended | 100/100 | 92 PASS，8 REVISE | [批次 12](2026-10-20-question-review-batch-12.md) |
| 13 | 按 questionId 排序的第 1,101–1,200 道 extended | 100/100 | 79 PASS，21 REVISE | [批次 13](2026-10-20-question-review-batch-13.md) |
| 14 | 按 questionId 排序的第 1,201–1,234 道 extended | 34/34 | 25 PASS，9 REVISE | [批次 14](2026-10-20-question-review-batch-14.md) |

**总进度：1,334 / 1,334。** 批次 01（100 道 core）和批次 02–14（1,234 道 extended）完成；累计 1,140 PASS、194 REVISE。所有题目均已逐题复核；194 道 `REVISE` 已修订验收通过。

## 批次规则

- 一个题目按唯一 `questionId` 计数；中英文两份内容一起复核。
- 第 1 批用 `qualityTier: core` 的 100 题；后续批次从其余 `extended` 中按稳定 `questionId` 顺序取题。
- 每批报告列出该批每个 ID 及判定，并记录可执行的改写方向。
- 不把之前曾标为 core、已有历史评审或批次内大多数通过当作免审理由。
- 只要有题未逐题检查，不能将总目标标为完成。
