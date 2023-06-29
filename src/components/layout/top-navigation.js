"use client"

import { useState } from 'react'
import MainHeader from '@/components/layout/main-header'
import MainMobileHeader from '@/components/layout/main-mobile-header'

export default function TopNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <MainMobileHeader mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <MainHeader setMobileMenuOpen={setMobileMenuOpen} />
    </>
  )
}
