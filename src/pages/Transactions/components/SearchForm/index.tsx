import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import * as z from 'zod';
import { TypeOf,  } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SeachFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { register, 
      handleSubmit, 
      formState: {
        isSubmitting
      } 
    } = useForm<SeachFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSeachTransactions(data: SeachFormInputs){
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(data);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSeachTransactions)}>
      <input
        type="text"
        placeholder="Search a Transaction"
        {...register('query')}

      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Search</button>
    </SearchFormContainer>
  )
};