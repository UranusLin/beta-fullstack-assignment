import NavBack from '@/components/navBack'
import Title from '@/components/title'
import VotingStatus from "@/components/yourVotingStatus";
import VoteResult from "@/components/voteResult";
import Content from "@/components/content";

export default function Home() {
  return (
      <main className={`h-1181 w-auto flex item-center justify-center`}>
          <div>
            <NavBack />
            <Title />
            <div className={`pt-26 pb-4`}>
              <VotingStatus />
            </div>
            <div className={`pb-4`}>
                <VoteResult />
            </div>
            <Content />
          </div>
      </main>
  )
}
