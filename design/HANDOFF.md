# Week 5 Handoff Notes

## Routes
The prototype includes the Posts page, a single Post page, and a 404 error page. From Posts, the user can open a post and then return to the Posts page.

## Components
The main reusable components are:
- PostCard — PostCard.tsx
- Button — Button.tsx
- Tag — Tag.tsx

## Button
The Button component has two variants: primary and secondary.
In React, I will use the `variant` prop to switch between them.

## PostCard
The PostCard uses a vertical layout.
It has a 12px gap between elements, 16px padding, and an 8px border radius.

## Responsive layout
On desktop mode the post cards are displayed in three columns and the header is in one row.
On mobile mode the cards are displayed in one column and the header elements are stacked.

## Design tokens
- color/primary: #1D4ED8
- color/on-primary: #FFFFFF
- color/text: #1F2937
- color/text-muted: #9CA3AF
- color/surface: #FFFFFF
- color/border: #D1D5DB
- space/2: 8px
- space/4: 16px
- space/6: 24px
- radius/md: 8px