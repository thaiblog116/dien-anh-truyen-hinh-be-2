export default ({ env }: { env: any }) => ({
  // Các plugin khác nếu có...
  upload: {
    config: {
      sizeLimit: 5 * 1024 * 1024,   // 5MB (bytes) – Strapi sẽ throw lỗi nếu vượt
    },
  },
  "users-permissions": {
    config: {
      register: {
        allowedFields: ["fullname"], // Thêm fullname (và các field custom khác nếu cần, ví dụ: ['fullname', 'phone', 'birthdate'])
      },
    },
  },
});
