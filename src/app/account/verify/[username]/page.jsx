"use client"

import React from 'react'
import { useMutation } from "@tanstack/react-query";
import myaxios from "@/utils/myaxios";
import { URL } from "@/data/URL";
import { getError } from "@/utils/utils";
import { useParams } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { message } from 'antd';

const page = () => {
  const searchParams = useSearchParams();
  const otp = searchParams.get('otp');
    const [form, setForm] = React.useState({
        otp: otp ? otp : ''
    });
    const { username } = useParams();

    const verifyMutate = useMutation({
        mutationKey: ['verify'],
        mutationFn: async () => {
            const response = await myaxios.get(`${URL}acc/activate/${username}/${form.otp}/`);
            return response.data;
        },
        onSuccess: (data) => {
            console.log("data", data);
            if (data?.success) {
              message.success(data?.message);
              window.location.href = `/account/login/`;
            }
        },
        onError: (error) => {
            console.log("error", error);
            message.error(getError(error));
        }
    })
    const handleVerify = (e) => {
      e.preventDefault();
      console.log({form})
      console.log({username})
      verifyMutate.mutateAsync();
    }
  return (
    <div>
      <h2>Verify</h2>
      <form onSubmit={handleVerify}>
        <input type="text" name="otp" onChange={(e) => setForm({...form, otp: e.target.value})} placeholder="Enter OTP" value={form.otp} required />
        <button type="submit">Verify</button>
      </form>
    </div>
  )
}

export default page