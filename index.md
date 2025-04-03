---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "ITAM "
  text: "User guide for ITAM LIMS"
  # tagline: My great project tagline
  actions:
    - theme: brand
      text: Read Guide
      link: /Introduction
    # - theme: alt
    #   text: API Examples
    #   link: /api-examples

# features:
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

# Contributors

<VPTeamMembers size="small" :members="members" />

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

// Mr. PATRICK DE SOUZA, ICT Director
// Mr. FORKUO SAMUEL, Head of Department
// AMEDZRO EMMANUEL KOFI, Lead Developer.
// EMMANUEL ESSIAW , Developer.
// EMMANUEL ATTY A. , Developer.
// GABRIEL BABAYAIGIWEH AKIKOR, Developer.


const members = [
  {
    avatar: '/user.png',
    name: 'Mr. PATRICK DE SOUZA',
    title: 'ICT Director',
   
  },
   {
    avatar: '/user.png',
    name: 'Mr. FORKUO SAMUEL',
    title: 'Head of Department',
   
  },
   {
    avatar: '/user.png',
    name: 'AMEDZRO EMMANUEL KOFI',
    title: 'Developer',
   
  },
   {
    avatar: '/user.png',
    name: 'EMMANUEL ESSIAW',
    title: 'Developer',
   
  },
   {
    avatar: '/user.png',
    name: 'GABRIEL BABAYAIGIWEH AKIKOR',
    title: 'Developer',
   
  },
  {
    avatar: '/user.png',
    name: 'EMMANUEL ATTY A.',
    title: 'Developer',
   
  },
  
]
</script>