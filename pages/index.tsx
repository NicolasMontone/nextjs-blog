import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export default function Home({ allPostsData }: { allPostsData: { title: string; date: string; id: string; }[] }) {
  return (
    <Layout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map((PostData) => (
            <li className={utilStyles.listItem} key={PostData.id}>
              <Link href={`/posts/${PostData.id}`}>
                <a>{PostData.title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={PostData.date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout >
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

