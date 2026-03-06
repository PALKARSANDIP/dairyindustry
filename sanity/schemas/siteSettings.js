// sanity/schemas/siteSettings.js
// Global site settings you can change from admin panel

export const siteSettingsSchema = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: () => '⚙️',
  // Only one settings document allowed
  __experimental_actions: ['update', 'publish'],

  fields: [
    {
      name: 'showAnnouncementBar',
      title: 'Show Announcement Bar?',
      type: 'boolean',
      description: 'Show a yellow announcement bar at the top of every page.',
      initialValue: true,
    },
    {
      name: 'announcementBar',
      title: 'Announcement Bar Text',
      type: 'string',
      description: 'Text shown in the yellow bar. Example: "Stall booking closing 30 Sep 2026!"',
    },
    {
      name: 'stallBookingDeadline',
      title: 'Stall Booking Deadline',
      type: 'date',
      description: 'Used to show countdown and deadline warnings.',
    },
  ],
}
