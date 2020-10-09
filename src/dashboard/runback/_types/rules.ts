export class Rules {
  readonly grand_final_stage: number = 13

  readonly stage_list: Array<{ text: string; value: number }> = [
    { text: "Pools", value: 1 },
    { text: "Top 128", value: 2 },
    { text: "Top 96", value: 3 },
    { text: "Top 64", value: 4 },
    { text: "Top 48", value: 5 },
    { text: "Top 32", value: 6 },
    { text: "Top 16", value: 7 },
    { text: "Top 8", value: 8 },
    { text: "Top 4", value: 9 },
    { text: "Quarter Final", value: 10 },
    { text: "Semi Final", value: 11 },
    { text: "Final", value: 12 },
    { text: "Grand Final", value: 13 },
  ]
  readonly side_list: Array<{ text: string; value: number }> = [
    { text: "None", value: 1 },
    { text: "Winners", value: 2 },
    { text: "Losers", value: 3 },
  ]
  readonly grand_final_list: Array<{ text: string; value: number }> = [
    { text: "Winners — Losers", value: 1 },
    { text: "Losers — Winners", value: 2 },
    { text: "Losers — Losers (Reset)", value: 3 },
  ]
  readonly winners_text: string = "W"
  readonly losers_text: string = "L"
  readonly grand_final_is_winner: Array<Array<boolean>> = [
    [true, false],
    [false, true],
    [false, false],
  ]

  is_grand_final(stage: number) {
    return stage === this.grand_final_stage
  }

  is_winners(grand_final_side: number, player_num: number): boolean {
    return this.grand_final_is_winner[grand_final_side - 1][player_num]
  }
}
