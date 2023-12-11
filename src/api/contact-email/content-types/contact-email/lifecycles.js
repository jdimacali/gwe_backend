module.exports = {
  async afterCreate(event) {
    // Connected to "Save" button in admin panel
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "james.dimacali1@gmail.com",
        from: `${result.email}`, // e.g. single sender verification in SendGrid
        subject: `${result.name}`,
        text: `${result.message}`, // Replace with a valid field ID
      });
    } catch (err) {
      console.log(err);
    }
  },
};
