import { useGlobalContext } from "@/context/globalContext";

export const useEditUser = () => {
  const { users, setId, setName, setSurname, setCountry, setBirthday } =
    useGlobalContext();

  return (userId: string) => {
    if (confirm("Are you sure you want to change the infos of this user?")) {
      const user = users.find((u) => u._id === userId);

      if (user && user._id) {
        const { _id, name, surname, country, birthday } = user;
        const formData = new FormData();

        formData.append("id", _id);
        setId(_id);
        formData.append("name", name);
        setName(name);
        formData.append("surname", surname);
        setSurname(surname);
        formData.append("country", country);
        setCountry(country);
        formData.append("birthday", birthday);
        setBirthday(birthday);
      }
    }
  };
};
