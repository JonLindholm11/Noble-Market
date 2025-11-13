import { getOrder_Items } from "#db/queries/order_items";
import { createUser } from "#db/queries/users";

export async function seedUsers() {
  const users = [
  {
    email: "admin@projectname.com",
    password: "admin123",
    role_id: 1,
  },
  {
    email: "salesman1@projectname.com",
    password: "sales123",
    role_id: 2,
  },
  {
    email: "salesman2@projectname.com",
    password: "sales123",
    role_id: 2,
  },
  {
    email: "salesman3@projectname.com",
    password: "sales123",
    role_id: 2,
  },
  {
    email: "customerservice1@projectname.com",
    password: "service123",
    role_id: 3,
  },
  {
    email: "customerservice2@projectname.com",
    password: "service123",
    role_id: 3,
  },
  {
    email: "customerservice3@projectname.com",
    password: "service123",
    role_id: 3,
  },
  {
    email: "customerservice4@projectname.com",
    password: "service123",
    role_id: 3,
  },
  {
    email: "customerservice5@projectname.com",
    password: "service123",
    role_id: 3,
  },
  {
    email: "user1@projectname.com",
    password: "user123",
    role_id: 4,
  },
  {
    email: "user2@projectname.com",
    password: "user123",
    role_id: 4,
  },
  {
    email: "user3@projectname.com",
    password: "user123",
    role_id: 4,
  },
  {
    email: "user4@projectname.com",
    password: "user123",
    role_id: 4,
  },
  {
    email: "user5@projectname.com",
    password: "user123",
    role_id: 4,
  },
  {
    email: "user6@projectname.com",
    password: "user123",
    role_id: 4,
  },
  {
    email: "user7@projectname.com",
    password: "user123",
    role_id: 4,
  },
  {
    email: "user8@projectname.com",
    password: "user123",
    role_id: 4,
  },
  {
    email: "user9@projectname.com",
    password: "user123",
    role_id: 4,
  },
  {
    email: "user10@projectname.com",
    password: "user123",
    role_id: 4,
  },
  {
    email: "user11@projectname.com",
    password: "user123",
    role_id: 4,
  },
  {
    email: "user12@projectname.com",
    password: "user123",
    role_id: 4,
  },
  {
    email: "user13@projectname.com",
    password: "user123",
    role_id: 4,
  },
  {
    email: "user14@projectname.com",
    password: "user123",
    role_id: 4,
  },
  {
    email: "user15@projectname.com",
    password: "user123",
    role_id: 4,
  },
];
  for (const user of users) {
      await createUser(user);
    }
    console.log("completed seeding user");
}

