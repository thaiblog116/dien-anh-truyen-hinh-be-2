export default ({ env }: { env: any }) => ({
  // Các plugin khác nếu có...

  "users-permissions": {
    config: {
      register: {
        allowedFields: ["fullname"], // Thêm fullname (và các field custom khác nếu cần, ví dụ: ['fullname', 'phone', 'birthdate'])
      },
    },
  },
});
