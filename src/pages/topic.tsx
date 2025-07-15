import GridCard from "@/components/grid-card";
import Layout from "@/components/layout";
import Sidebar from "@/components/sidebar";
import TopicCard from "@/components/topic-card";

function Topic() {
  const topicItems = [
    {
      title: "Atomic Design vs FSD, 프런트엔드 구조 설계의 길",
      profile: {
        icon: "/small.svg",
        name: "밍고 TEAM",
        domains: ["IT및 기술 분야", "교육", "비지니스"],
      },
    },
    {
      title: "Atomic Design vs FSD, 프런트엔드 구조 설계의 길",
      profile: {
        icon: "/small.svg",
        name: "밍고 TEAM",
        domains: ["IT및 기술 분야", "교육", "비지니스"],
      },
    },
    {
      title: "Atomic Design vs FSD, 프런트엔드 구조 설계의 길",
      profile: {
        icon: "/small.svg",
        name: "밍고 TEAM",
        domains: ["IT및 기술 분야", "교육", "비지니스"],
      },
    },
    {
      title: "Atomic Design vs FSD, 프런트엔드 구조 설계의 길",
      profile: {
        icon: "/small.svg",
        name: "밍고 TEAM",
        domains: ["IT및 기술 분야", "교육", "비지니스"],
      },
    },
    {
      title: "Atomic Design vs FSD, 프런트엔드 구조 설계의 길",
      profile: {
        icon: "/small.svg",
        name: "밍고 TEAM",
        domains: ["IT및 기술 분야", "교육", "비지니스"],
      },
    },
    {
      title: "Atomic Design vs FSD, 프런트엔드 구조 설계의 길",
      profile: {
        icon: "/small.svg",
        name: "밍고 TEAM",
        domains: ["IT및 기술 분야", "교육", "비지니스"],
      },
    },
  ];
  const newItems = [
    {
      icon: "/new-topic.jpg",
      title: "사업을 한다는 것 vs 온라인 플랫폼을 만든다는 것",
      content: `본 토픽을 작성하는 시간을 기준으로 어제부터 스콧 애덤스가 집필한 'THE SYSTEM 더 시스템'이라는 책을 읽기 시작했다. 사업과 관련된 내용인지는 도입부까지 읽은 나로서는 알 수 없지만, 그와 별개로 사업이라는 건 실패와 역경의 연속이기 때문에 이를 극복하고 내가 원하는 것을 얻는 가이드라인을 제공해주는 듯 하여 구매한 지 몇 년만에 제대로 읽기 시작했다.
                문득 떠오른 아이디어가 이 세상에 없는 것 같고, 그 아이디어를 실제 구현만 잘하면 성공할 것만 같은 지나친 확신을 가진 적이 있는가? 나는 아직까지 없다. 나 스스로 내가 떠올린 아이디어는 혁신적이지 않다는 것과 이미 누군가가 떠올렸거나 실제 행동을 통해 영위하고 있을 것이라는 이른 결정을 내린 탓도 크다. 그러나 이 생각은 99% 사실인 듯 하다.
                반면에, 이런 예시도 있다. 'YouTube 채널 운영 해볼까?", "내가 떠올린 콘텐츠가 있는데 이거 잘만 하면 대박날 거 같아!", "요즘 YouTube 채널 하나씩은 다들 운영하는데 나도 조만간 해보려고" 등의 말을 한 번쯤 해봤거나 들어본 경험이 있을 것이다.`,
      user: {
        icon: "/new-topic.jpg",
        domains: ["IT 프로그래밍"],
        name: "춘식이",
      },
      views: "10",
      likes: "10",
    },
    {
      icon: "/new-topic.jpg",
      title: "사업을 한다는 것 vs 온라인 플랫폼을 만든다는 것",
      content: `본 토픽을 작성하는 시간을 기준으로 어제부터 스콧 애덤스가 집필한 'THE SYSTEM 더 시스템'이라는 책을 읽기 시작했다. 사업과 관련된 내용인지는 도입부까지 읽은 나로서는 알 수 없지만, 그와 별개로 사업이라는 건 실패와 역경의 연속이기 때문에 이를 극복하고 내가 원하는 것을 얻는 가이드라인을 제공해주는 듯 하여 구매한 지 몇 년만에 제대로 읽기 시작했다.
                문득 떠오른 아이디어가 이 세상에 없는 것 같고, 그 아이디어를 실제 구현만 잘하면 성공할 것만 같은 지나친 확신을 가진 적이 있는가? 나는 아직까지 없다. 나 스스로 내가 떠올린 아이디어는 혁신적이지 않다는 것과 이미 누군가가 떠올렸거나 실제 행동을 통해 영위하고 있을 것이라는 이른 결정을 내린 탓도 크다. 그러나 이 생각은 99% 사실인 듯 하다.
                반면에, 이런 예시도 있다. 'YouTube 채널 운영 해볼까?", "내가 떠올린 콘텐츠가 있는데 이거 잘만 하면 대박날 거 같아!", "요즘 YouTube 채널 하나씩은 다들 운영하는데 나도 조만간 해보려고" 등의 말을 한 번쯤 해봤거나 들어본 경험이 있을 것이다.`,
      user: {
        icon: "/new-topic.jpg",
        domains: ["IT 프로그래밍"],
        name: "춘식이",
      },
      views: "10",
      likes: "10",
    },
    {
      icon: "/new-topic.jpg",
      title: "사업을 한다는 것 vs 온라인 플랫폼을 만든다는 것",
      content: `본 토픽을 작성하는 시간을 기준으로 어제부터 스콧 애덤스가 집필한 'THE SYSTEM 더 시스템'이라는 책을 읽기 시작했다. 사업과 관련된 내용인지는 도입부까지 읽은 나로서는 알 수 없지만, 그와 별개로 사업이라는 건 실패와 역경의 연속이기 때문에 이를 극복하고 내가 원하는 것을 얻는 가이드라인을 제공해주는 듯 하여 구매한 지 몇 년만에 제대로 읽기 시작했다.
                문득 떠오른 아이디어가 이 세상에 없는 것 같고, 그 아이디어를 실제 구현만 잘하면 성공할 것만 같은 지나친 확신을 가진 적이 있는가? 나는 아직까지 없다. 나 스스로 내가 떠올린 아이디어는 혁신적이지 않다는 것과 이미 누군가가 떠올렸거나 실제 행동을 통해 영위하고 있을 것이라는 이른 결정을 내린 탓도 크다. 그러나 이 생각은 99% 사실인 듯 하다.
                반면에, 이런 예시도 있다. 'YouTube 채널 운영 해볼까?", "내가 떠올린 콘텐츠가 있는데 이거 잘만 하면 대박날 거 같아!", "요즘 YouTube 채널 하나씩은 다들 운영하는데 나도 조만간 해보려고" 등의 말을 한 번쯤 해봤거나 들어본 경험이 있을 것이다.`,
      user: {
        icon: "/new-topic.jpg",
        domains: ["IT 프로그래밍"],
        name: "춘식이",
      },
      views: "10",
      likes: "10",
    },
    {
      icon: "/new-topic.jpg",
      title: "사업을 한다는 것 vs 온라인 플랫폼을 만든다는 것",
      content: `본 토픽을 작성하는 시간을 기준으로 어제부터 스콧 애덤스가 집필한 'THE SYSTEM 더 시스템'이라는 책을 읽기 시작했다. 사업과 관련된 내용인지는 도입부까지 읽은 나로서는 알 수 없지만, 그와 별개로 사업이라는 건 실패와 역경의 연속이기 때문에 이를 극복하고 내가 원하는 것을 얻는 가이드라인을 제공해주는 듯 하여 구매한 지 몇 년만에 제대로 읽기 시작했다.
                문득 떠오른 아이디어가 이 세상에 없는 것 같고, 그 아이디어를 실제 구현만 잘하면 성공할 것만 같은 지나친 확신을 가진 적이 있는가? 나는 아직까지 없다. 나 스스로 내가 떠올린 아이디어는 혁신적이지 않다는 것과 이미 누군가가 떠올렸거나 실제 행동을 통해 영위하고 있을 것이라는 이른 결정을 내린 탓도 크다. 그러나 이 생각은 99% 사실인 듯 하다.
                반면에, 이런 예시도 있다. 'YouTube 채널 운영 해볼까?", "내가 떠올린 콘텐츠가 있는데 이거 잘만 하면 대박날 거 같아!", "요즘 YouTube 채널 하나씩은 다들 운영하는데 나도 조만간 해보려고" 등의 말을 한 번쯤 해봤거나 들어본 경험이 있을 것이다.`,
      user: {
        icon: "/new-topic.jpg",
        domains: ["IT 프로그래밍"],
        name: "춘식이",
      },
      views: "10",
      likes: "10",
    },
  ];
  return (
    // <-- 전체 레이아웃
    <Layout>
      {/* <-- 컨텐츠 영역 -->  */}
      <main className="pt-13 w-full ">
        <div className="flex gap-4 p-4 sm:p-6">
          {/* <--사이드바--> */}

          <Sidebar />

          {/* <-- 오른쪽 --> */}
          {/* <-- 부모요소를 벗어나면 hidden 처리 해서 overflow-x-scroll 처리 되도록 함  */}
          <div className="flex flex-col gap-12 overflow-x-hidden">
            {/* 🔥핫토픽 섹션 */}
            <section>
              <h1> 🔥핫토픽 </h1>
              <p className="text-sm">
                지금 가장 주목받는 주제들을 살펴보고, 다양한 관점의 인사이트를
                얻어보세요.
              </p>
              {/* <-- 가로스크롤박스 --> */}
              <div className="flex overflow-x-scroll gap-4">
                {topicItems.map((item, index) => (
                  <TopicCard key={index} {...item} />
                ))}
              </div>
            </section>
            <section>
              {/* 🔥뉴토픽 섹션 */}
              <h1>✍️ 뉴토픽</h1>
              <p className="text-sm">
                새로운 시선으로, 새로운 이야기를 시작하세요. 지금 바로 당신만의
                토픽을 만들어보세요.
              </p>
              {/* <-- 그리드--> */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {newItems.map((item) => (
                  <GridCard {...item} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Topic;
