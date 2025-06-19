export { validation };
let validation: {
  mail: () => void;
  password: () => void;
} = {
  mail: () => {
    console.log(`valid`);
  },
  password() {
    console.log(`valid`);
  },
};
