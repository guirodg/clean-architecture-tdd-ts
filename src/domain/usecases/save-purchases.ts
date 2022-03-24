import { type } from "os"

export interface SavePuchases {
  save: (purchases: Array<SavePurchases.Params>) => Promise<void>
}

namespace SavePurchases {
  export type Params = {
    id: string
    date: Date
    value: number
  }
}

