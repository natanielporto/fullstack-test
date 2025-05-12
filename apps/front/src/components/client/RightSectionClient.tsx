"use client";

import { useEffect } from "react";

import { EditButton } from "@/components/client/EditButton";
import { useGlobalContext } from "@/context/globalContext";
import { PersonProps } from "@/interfaces/PersonProps";

import { DeleteButton } from "./DeleteButton";

interface RightSectionClientProps {
  users: PersonProps[];
}

export const RightSectionClient = ({ users }: RightSectionClientProps) => {
  const { setUsers } = useGlobalContext();

  useEffect(() => {
    setUsers(users);
  }, [users]);

  const commonTdStyle = "pl-1 w-[28%]";

  return (
    <section className="w-[50%] overflow-auto">
      <div className="border-2 border-blue-500 flex flex-col h-full overflow-auto">
        <div className="flex-none">
          <table className="w-full text-left text-gray-500">
            <thead>
              <tr className="border-b-2 border-gray-400 h-10">
                <th className={commonTdStyle}>Name</th>
                <th className={commonTdStyle}>Country</th>
                <th className={commonTdStyle}>Birthday</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center p-4">
                    No users found.
                  </td>
                </tr>
              ) : (
                users.map((person: PersonProps, i: number) => (
                  <tr
                    key={person._id}
                    className={`h-10 ${
                      i !== users.length - 1 ? "border-b-2 border-gray-400" : ""
                    }`}
                  >
                    <td
                      className={commonTdStyle}
                    >{`${person.name} ${person.surname}`}</td>
                    <td className={commonTdStyle}>{person.country}</td>
                    <td className={commonTdStyle}>{person.birthday}</td>
                    <td className="w-[16%]">
                      <div className="flex justify-around">
                        <DeleteButton userId={person._id} />
                        <EditButton userId={person._id} />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
