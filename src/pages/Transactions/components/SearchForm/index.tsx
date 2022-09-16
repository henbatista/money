import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

const searchFormSchema = z.object({
  query: z.string(),
})

type SeachFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchTransactions  = useContextSelector(TransactionsContext, (context) =>{
    return context.fetchTransactions
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SeachFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSeachTransactions(data: SeachFormInputs) {
    await fetchTransactions(data.query)
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
        Search
      </button>
    </SearchFormContainer>
  )
}
