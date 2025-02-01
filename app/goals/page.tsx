import GoalList from "@/components/GoalList"
import GoalForm from "@/components/GoalForm"

export default function GoalsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Financial Goals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GoalList />
        <GoalForm />
      </div>
    </div>
  )
}

