# 岗位阶段题库适用性覆盖报告

此报告由 `npm run report:stage-coverage` 从当前双语内容与已审核适用性数据生成。候选映射不计入覆盖；0 不等于题库没有相关题，也可能表示尚未审阅。

- 已发布题：1334（中英文共用题目 ID）。
- 已审核适用：1334；待审核：0；限定全部浏览：0。
- 可比较的岗位—阶段组合：68；已审核零题组合：0；不足 10 题组合：0。
- 已审核题中 1309 道保留同一岗位的多个阶段。
- 全站个性化上线条件：适用性覆盖通过；仍需完成界面与运行验收。

覆盖门槛只验证记录完整和组合非空，不证明标签已经准确、岗位模型已获行业校准或界面已经可用；发布还需内容复核与全站运行验收。

## 岗位 × 阶段 × A–H

| 岗位 | 阶段 ID | 已审核题 | A | B | C | D | E | F | G | H |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| engineering | junior-engineer | 292 | 49 | 12 | 17 | 7 | 79 | 0 | 62 | 66 |
| engineering | mid-level-engineer | 815 | 262 | 135 | 115 | 86 | 84 | 5 | 62 | 66 |
| engineering | senior-engineer | 1018 | 309 | 165 | 157 | 134 | 85 | 37 | 66 | 65 |
| engineering | staff-engineer | 1036 | 309 | 165 | 162 | 140 | 85 | 44 | 66 | 65 |
| engineering | engineering-manager | 1099 | 277 | 165 | 162 | 141 | 86 | 139 | 64 | 65 |
| engineering | manager-of-managers | 1124 | 277 | 165 | 162 | 141 | 86 | 164 | 64 | 65 |
| frontend | junior-engineer | 78 | 41 | 9 | 17 | 7 | 4 | 0 | 0 | 0 |
| frontend | mid-level-engineer | 469 | 195 | 70 | 113 | 82 | 4 | 5 | 0 | 0 |
| frontend | senior-engineer | 634 | 225 | 89 | 153 | 126 | 4 | 37 | 0 | 0 |
| frontend | staff-engineer | 652 | 225 | 89 | 158 | 132 | 4 | 44 | 0 | 0 |
| frontend | engineering-manager | 722 | 199 | 89 | 158 | 133 | 4 | 139 | 0 | 0 |
| frontend | manager-of-managers | 747 | 199 | 89 | 158 | 133 | 4 | 164 | 0 | 0 |
| backend | junior-engineer | 76 | 37 | 12 | 17 | 7 | 3 | 0 | 0 | 0 |
| backend | mid-level-engineer | 551 | 223 | 133 | 105 | 82 | 3 | 5 | 0 | 0 |
| backend | senior-engineer | 739 | 261 | 163 | 145 | 130 | 3 | 37 | 0 | 0 |
| backend | staff-engineer | 757 | 261 | 163 | 150 | 136 | 3 | 44 | 0 | 0 |
| backend | engineering-manager | 831 | 239 | 163 | 150 | 137 | 3 | 139 | 0 | 0 |
| backend | manager-of-managers | 856 | 239 | 163 | 150 | 137 | 3 | 164 | 0 | 0 |
| mobile | junior-engineer | 96 | 41 | 9 | 17 | 7 | 2 | 0 | 20 | 0 |
| mobile | mid-level-engineer | 492 | 196 | 71 | 114 | 84 | 2 | 5 | 20 | 0 |
| mobile | senior-engineer | 654 | 223 | 90 | 154 | 128 | 2 | 37 | 20 | 0 |
| mobile | staff-engineer | 672 | 223 | 90 | 159 | 134 | 2 | 44 | 20 | 0 |
| mobile | engineering-manager | 736 | 197 | 90 | 159 | 135 | 2 | 139 | 14 | 0 |
| mobile | manager-of-managers | 761 | 197 | 90 | 159 | 135 | 2 | 164 | 14 | 0 |
| ai-engineer | junior-engineer | 75 | 40 | 10 | 17 | 7 | 0 | 0 | 0 | 1 |
| ai-engineer | mid-level-engineer | 510 | 218 | 101 | 105 | 80 | 0 | 5 | 0 | 1 |
| ai-engineer | senior-engineer | 696 | 256 | 130 | 144 | 128 | 0 | 37 | 0 | 1 |
| ai-engineer | staff-engineer | 714 | 256 | 130 | 149 | 134 | 0 | 44 | 0 | 1 |
| ai-engineer | engineering-manager | 788 | 234 | 130 | 149 | 135 | 0 | 139 | 0 | 1 |
| ai-engineer | manager-of-managers | 813 | 234 | 130 | 149 | 135 | 0 | 164 | 0 | 1 |
| data | data-entry | 76 | 31 | 6 | 5 | 0 | 4 | 0 | 12 | 18 |
| data | data-independent | 355 | 165 | 82 | 56 | 18 | 4 | 0 | 12 | 18 |
| data | data-senior | 425 | 199 | 104 | 63 | 25 | 4 | 0 | 12 | 18 |
| data | data-expert | 425 | 199 | 104 | 63 | 25 | 4 | 0 | 12 | 18 |
| data | data-manager | 415 | 189 | 104 | 63 | 25 | 4 | 0 | 12 | 18 |
| data | data-organization | 415 | 189 | 104 | 63 | 25 | 4 | 0 | 12 | 18 |
| product | product-entry | 198 | 9 | 11 | 17 | 4 | 73 | 0 | 38 | 46 |
| product | product-independent | 519 | 67 | 111 | 119 | 60 | 75 | 3 | 38 | 46 |
| product | product-senior | 634 | 78 | 130 | 163 | 84 | 76 | 19 | 39 | 45 |
| product | product-expert | 644 | 78 | 130 | 167 | 87 | 76 | 22 | 39 | 45 |
| product | product-manager | 651 | 78 | 130 | 167 | 87 | 76 | 30 | 38 | 45 |
| product | product-organization | 652 | 78 | 130 | 167 | 87 | 76 | 31 | 38 | 45 |
| operations | operations-entry | 122 | 5 | 6 | 14 | 6 | 30 | 0 | 26 | 35 |
| operations | operations-independent | 312 | 29 | 67 | 59 | 63 | 31 | 2 | 26 | 35 |
| operations | operations-senior | 368 | 35 | 74 | 74 | 86 | 32 | 7 | 26 | 34 |
| operations | operations-expert | 370 | 35 | 74 | 74 | 87 | 32 | 8 | 26 | 34 |
| operations | operations-manager | 374 | 35 | 74 | 74 | 88 | 32 | 12 | 25 | 34 |
| operations | operations-organization | 374 | 35 | 74 | 74 | 88 | 32 | 12 | 25 | 34 |
| marketing | marketing-entry | 12 | 1 | 1 | 4 | 1 | 2 | 0 | 0 | 3 |
| marketing | marketing-independent | 84 | 3 | 18 | 39 | 19 | 2 | 0 | 0 | 3 |
| marketing | marketing-senior | 107 | 3 | 22 | 53 | 24 | 2 | 0 | 0 | 3 |
| marketing | marketing-expert | 108 | 3 | 22 | 54 | 24 | 2 | 0 | 0 | 3 |
| marketing | marketing-manager | 108 | 3 | 22 | 54 | 24 | 2 | 0 | 0 | 3 |
| marketing | marketing-organization | 108 | 3 | 22 | 54 | 24 | 2 | 0 | 0 | 3 |
| design | design-entry | 36 | 6 | 0 | 2 | 0 | 6 | 0 | 14 | 8 |
| design | design-independent | 90 | 27 | 9 | 20 | 5 | 6 | 1 | 14 | 8 |
| design | design-senior | 97 | 31 | 10 | 22 | 5 | 6 | 1 | 14 | 8 |
| design | design-expert | 97 | 31 | 10 | 22 | 5 | 6 | 1 | 14 | 8 |
| design | design-manager | 95 | 31 | 10 | 22 | 5 | 6 | 1 | 12 | 8 |
| design | design-organization | 95 | 31 | 10 | 22 | 5 | 6 | 1 | 12 | 8 |
| manager | manager-manager | 462 | 18 | 8 | 71 | 62 | 74 | 138 | 34 | 57 |
| manager | manager-organization | 487 | 18 | 8 | 71 | 62 | 74 | 163 | 34 | 57 |
| pmo | pmo-entry | 52 | 0 | 2 | 0 | 6 | 30 | 0 | 7 | 7 |
| pmo | pmo-independent | 123 | 0 | 8 | 11 | 59 | 31 | 0 | 7 | 7 |
| pmo | pmo-senior | 160 | 0 | 9 | 22 | 82 | 31 | 2 | 7 | 7 |
| pmo | pmo-expert | 170 | 0 | 9 | 24 | 89 | 31 | 3 | 7 | 7 |
| pmo | pmo-manager | 172 | 0 | 9 | 24 | 89 | 31 | 5 | 7 | 7 |
| pmo | pmo-organization | 178 | 0 | 9 | 24 | 89 | 31 | 11 | 7 | 7 |

## 待审核能力叶子

| 能力 | 待审核题 |
| --- | ---: |

## 限定全部浏览的原因

当前没有已审核的限定条目；待审核题仍可在全部题库阅读。

## 低覆盖解释与后续

审阅完成后，逐项记录低覆盖原因；题量阈值只用于发现需要检查的组合，不作为内容质量分数。
