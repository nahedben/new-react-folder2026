import {it, expect, describe} from 'vitest'
import { priceFormat } from './money'

describe(priceFormat,()=>{
  it('Format 1999 cents as @19.99',()=>{
    expect(priceFormat(1999)).toBe('$19.99')
  })

  it('Displays 2 decimals',()=>{
    expect(priceFormat(1090)).toBe('$10.90');
    expect(priceFormat(100)).toBe('$1.00')
  })
  //   it('Displays 2 decimals',()=>{
      
  // })
})