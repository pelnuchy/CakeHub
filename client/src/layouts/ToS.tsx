interface Section {
  title: string;
  subTitle: string;
  type: string;
  content: string[];
}

const TermsofService: React.FC = () => {
  const sections: Section[] = [
    {
      title: 'Chính sách bảo mật',
      subTitle: '',
      type: '',
      content: [
        'Cập nhật lần cuối: Ngày 12 tháng 8, 2024',
        'Chính sách bảo mật này mô tả các chính sách và quy trình của chúng tôi về việc thu thập, sử dụng và tiết lộ thông tin của Bạn khi Bạn sử dụng dịch vụ và thông báo cho Bạn về quyền riêng tư của Bạn và cách luật pháp bảo vệ Bạn.',
        'Chúng tôi sử dụng dữ liệu cá nhân của Bạn để cung cấp và cải thiện dịch vụ. Bằng cách sử dụng dịch vụ, Bạn đồng ý với việc thu thập và sử dụng thông tin theo chính sách bảo mật này.',
      ],
    },
    {
      title: 'Thu Thập Và Sử Dụng Dữ Liệu Cá Nhân Của người dùng',
      subTitle: 'Các Loại Dữ Liệu Được Thu Thập',
      type: 'Dữ liệu cá nhân',
      content: [
        'Khi sử dụng dịch vụ của chúng tôi, chúng tôi có thể yêu cầu Bạn cung cấp một số thông tin cá nhân có thể xác nhận để liên hệ hoặc nhận dạng Bạn. Các thông tin cá nhân có thể nhận diện không giới hạn bao gồm:',
        '• Địa chỉ Email',
        '• Họ và tên',
        '• Số điện thoại',
        '• Địa chỉ nhà hiện tại',
      ],
    },
    {
      title: '',
      subTitle: '',
      type: 'Dữ liệu sử dụng',
      content: [
        'Dữ liệu sử dụng được thu thập tự động khi sử dụng dịch vụ.',
        'Dữ liệu sử dụng có thể bao gồm thông tin như Internet Protocol(IP) của thiết bị Bạn, loại trình duyệt, phiên bản trình duyệt, các trang của dịch vụ mà Bạn truy cập, thời gian và ngày truy cập của Bạn, thời gian dành cho những trang đó, các nhận dạng thiết bị duy nhất và dữ liệu chẩn đoán khác.',
        'Khi Bạn truy cập Dịch Vụ thông qua hoặc bằng thiết bị di động, Chúng Tôi có thể tự động thu thập một số thông tin nhất định, bao gồm, nhưng không giới hạn, loại thiết bị di động Bạn sử dụng, ID duy nhất của thiết bị di động của Bạn, địa chỉ IP của thiết bị di động của Bạn, hệ điều hành di động của Bạn, loại trình duyệt Internet di động mà Bạn sử dụng, các nhận dạng thiết bị duy nhất và dữ liệu chẩn đoán khác.',
        'Chúng Tôi cũng có thể thu thập thông tin mà trình duyệt của Bạn gửi bất cứ khi nào Bạn truy cập Dịch Vụ của chúng tôi hoặc khi Bạn truy cập Dịch Vụ thông qua hoặc bằng thiết bị di động.',
      ],
    },
    {
      title: '',
      subTitle: '',
      type: 'Hệ thống theo dõi và cookies',
      content: [
        'Chúng Tôi sử dụng Cookies và hệ thống theo dõi tương tự để theo dõi hoạt động trên Dịch Vụ của Chúng Tôi và lưu trữ một số thông tin nhất định. Các hệ thống theo dõi được sử dụng là đèn hiệu, thẻ, và tập lệnh để thu thập và theo dõi thông tin và để cải thiện và phân tích Dịch Vụ của Chúng Tôi. Các công nghệ mà Chúng Tôi sử dụng có thể bao gồm:',
        '• Cookies hoặc Cookies Trình Duyệt. Cookie là một tệp nhỏ được đặt trên Thiết Bị của Bạn. Bạn có thể chỉ đạo trình duyệt của Bạn từ chối tất cả Cookies hoặc thông báo khi một Cookie đang được gửi. Tuy nhiên, nếu Bạn không chấp nhận Cookies, Bạn có thể không sử dụng được một số phần của Dịch Vụ của chúng tôi. Trừ khi Bạn đã điều chỉnh cài đặt trình duyệt của mình để từ chối Cookies, Dịch Vụ của chúng tôi có thể sử dụng Cookies.',
        '• Web Beacons. Một số phần của Dịch Vụ của chúng tôi và các email của chúng tôi có thể chứa các tệp điện tử nhỏ được gọi là web beacons (còn được gọi là clear gifs, pixel tags và single-pixel gifs) cho phép Công Ty, ví dụ, đếm người dùng đã truy cập những trang đó hoặc mở một email và cho các thống kê trang web liên quan khác (ví dụ, ghi lại sự phổ biến của một phần nhất định và xác minh tính toàn vẹn của hệ thống và máy chủ).',
        'Cookies có thể là "Persistent" hoặc "Session". Persistent Cookies vẫn còn trên máy tính cá nhân hoặc thiết bị di động của Bạn khi Bạn ngoại tuyến, trong khi Session bị xóa ngay khi Bạn đóng trình duyệt web của Bạn.',
        'Chúng tôi sử dụng cả Session và Persistent Cookies cho các mục đích sau:',
        '• Tính thiết yếu của Cookies',
        '- Loại: Session',
        '- Quản lý bởi: Admin CakeHub',
        '- Mục đích: Những Cookies này là cần thiết để cung cấp cho Bạn các dịch vụ có sẵn thông qua Trang Web và cho phép Bạn sử dụng một số tính năng của nó. Chúng giúp xác thực người dùng và ngăn chặn việc sử dụng gian lận tài khoản người dùng. Nếu không có những Cookies này, các dịch vụ mà Bạn đã yêu cầu không thể được cung cấp, và Chúng tôi chỉ sử dụng những Cookies này để cung cấp cho Bạn những dịch vụ đó.',
        '• Chính sách/Quản lý thông báo cho Cookies',
        '- Loại: Persistent Cookies',
        '- Quản lý bởi: Admin CakeHub',
        '- Mục đích: Những Cookies này xác định xem người dùng có chấp nhận sử dụng cookies trên Trang Web hay không.',
        '• Chức năng của Cookies',
        '- Loại: Persistent Cookies',
        '- Quản lý bởi: Admin CakeHub',
        '- Mục đích: Những Cookies này cho phép chúng tôi ghi nhớ các lựa chọn Bạn thực hiện khi Bạn sử dụng Trang Web, chẳng hạn như ghi nhớ chi tiết đăng nhập của bạn hoặc tùy chọn ngôn ngữ. Mục đích của những Cookies này là cung cấp cho Bạn một trải nghiệm cá nhân hơn và tránh việc Bạn phải nhập lại tùy chọn của mình mỗi khi Bạn sử dụng Trang Web.',
      ],
    },
    {
      title: '',
      subTitle: 'Sử Dụng Dữ Liệu Cá Nhân Của Bạn',
      type: '',
      content: [
        'Dịch vụ của chúng tôi có thể sử dụng dữ liệu cá nhân của bạn cho các mục đích sau:',
        '• Cung cấp và duy trì Dịch vụ của chúng tôi, bao gồm giám sát việc sử dụng Dịch vụ của chúng tôi.',
        '• Quản lý Tài khoản của bạn: quản lý việc đăng ký của bạn với tư cách là người dùng của Dịch vụ. Dữ Liệu Cá Nhân bạn cung cấp có thể giúp bạn truy cập vào các chức năng khác nhau của Dịch vụ mà bạn có sẵn như một người dùng đã đăng ký.',
        '• Thực hiện hợp đồng: phát triển, tuân thủ và thực hiện hợp đồng mua bán sản phẩm, hàng hóa hoặc dịch vụ mà bạn đã mua hoặc bất kỳ hợp đồng nào khác với chúng tôi thông qua Dịch vụ.',
        '• Liên lạc với bạn: Liên lạc với bạn qua email, cuộc gọi điện thoại, tin nhắn SMS, hoặc các hình thức giao tiếp điện tử tương tự, chẳng hạn như thông báo đẩy của ứng dụng di động liên quan đến các bản cập nhật hoặc thông báo thông tin liên quan đến các chức năng, sản phẩm hoặc dịch vụ đã ký kết, bao gồm các cập nhật bảo mật, khi cần thiết hoặc hợp lý để thực hiện chúng.',
        '• Cung cấp cho bạn tin tức, ưu đãi đặc biệt và thông tin chung về các sản phẩm, dịch vụ và sự kiện khác mà chúng tôi cung cấp, tương tự như những gì bạn đã mua hoặc yêu cầu thông tin trừ khi bạn đã chọn không nhận thông tin như vậy.',
        '• Quản lý yêu cầu của bạn: Để giải quyết và quản lý các yêu cầu của bạn đối với chúng tôi.',
        '• Chuyển giao kinh doanh: Chúng tôi có thể sử dụng thông tin của bạn để đánh giá hoặc tiến hành sáp nhập, thoái vốn, tái cấu trúc, tổ chức lại, giải thể hoặc bán hoặc chuyển nhượng một số hoặc tất cả tài sản của chúng tôi, cho dù là một hoạt động đang diễn ra hoặc như một phần của phá sản, thanh lý hoặc thủ tục tương tự, trong đó Dữ Liệu Cá Nhân mà chúng tôi nắm giữ về người dùng Dịch vụ của chúng tôi là một trong những tài sản được chuyển giao.',
        '• Các mục đích khác: Chúng tôi có thể sử dụng thông tin của bạn cho các mục đích khác, chẳng hạn như phân tích dữ liệu, xác định xu hướng sử dụng, xác định hiệu quả của các chiến dịch quảng cáo và để đánh giá và cải thiện Dịch vụ, sản phẩm, dịch vụ, tiếp thị của chúng tôi và trải nghiệm của Bạn.',
        'Chúng tôi có thể chia sẻ thông tin cá nhân của bạn trong các tình huống sau:',
        '• Với Nhà cung cấp dịch vụ: Chúng tôi có thể chia sẻ thông tin cá nhân của bạn với các Nhà cung cấp dịch vụ để giám sát và phân tích việc sử dụng Dịch vụ của chúng tôi, để liên lạc với bạn.',
        '• Chuyển giao kinh doanh: Chúng tôi có thể chia sẻ hoặc chuyển giao thông tin cá nhân của bạn trong quá trình hoặc trong quá trình đàm phán về bất kỳ vụ sáp nhập, bán tài sản của Công ty, tài trợ hoặc mua lại toàn bộ hoặc một phần doanh nghiệp của chúng tôi cho một công ty khác.',
        '• Với các công ty liên kết: Chúng tôi có thể chia sẻ thông tin của bạn với các công ty liên kết của chúng tôi, trong trường hợp đó, chúng tôi sẽ yêu cầu các công ty liên kết đó tuân thủ Chính Sách Bảo Mật này. Các công ty liên kết bao gồm công ty mẹ của chúng tôi và bất kỳ công ty con nào khác, các đối tác liên doanh hoặc các công ty khác mà chúng tôi kiểm soát hoặc đang dưới sự kiểm soát chung với chúng tôi.',
        '• Với các đối tác kinh doanh: Chúng tôi có thể chia sẻ thông tin của bạn với các đối tác kinh doanh của chúng tôi để cung cấp cho bạn một số sản phẩm, dịch vụ hoặc khuyến mãi nhất định.',
        '• Với người dùng khác: khi bạn chia sẻ thông tin cá nhân hoặc tương tác với các khu vực công cộng với những người dùng khác, thông tin đó có thể được tất cả người dùng xem và có thể được phân phối công khai ra bên ngoài.',
        '• Với sự đồng ý của bạn: Chúng tôi có thể tiết lộ thông tin cá nhân của bạn cho bất kỳ mục đích nào khác với sự đồng ý của bạn.',
      ],
    },
    {
      title: '',
      subTitle: 'Lưu Trữ Dữ Liệu Cá Nhân Của Bạn',
      type: '',
      content: [
        'Dịch vụ sẽ lưu trữ Dữ Liệu Cá Nhân của bạn chỉ trong thời gian cần thiết cho các mục đích được quy định trong Chính Sách Bảo Mật này. Chúng tôi sẽ lưu trữ và sử dụng Dữ Liệu Cá Nhân của bạn trong phạm vi cần thiết để tuân thủ các nghĩa vụ pháp lý của chúng tôi (ví dụ: nếu chúng tôi bắt buộc phải lưu trữ dữ liệu của bạn để tuân thủ các luật áp dụng), giải quyết tranh chấp và thực thi các thỏa thuận và chính sách pháp lý của chúng tôi.',
        'Dịch vụ cũng sẽ lưu trữ Dữ Liệu Sử Dụng cho các mục đích phân tích nội bộ. Dữ Liệu Sử Dụng thường được lưu trữ trong thời gian ngắn hơn, trừ khi dữ liệu này được sử dụng để củng cố an ninh hoặc để cải thiện chức năng của Dịch vụ của chúng tôi, hoặc chúng tôi có nghĩa vụ pháp lý phải lưu trữ dữ liệu này trong thời gian dài hơn.',
      ],
    },
    {
      title: '',
      subTitle: 'Chuyển Giao Dữ Liệu Cá Nhân Của Bạn',
      type: '',
      content: [
        'Thông tin của bạn, bao gồm Dữ Liệu Cá Nhân, được xử lý tại các văn phòng hoạt động của Công ty và ở bất kỳ nơi nào khác mà các bên liên quan trong việc xử lý dữ liệu có mặt. Điều này có nghĩa là thông tin này có thể được chuyển đến và duy trì trên các máy tính nằm ngoài tiểu bang, tỉnh, quốc gia của bạn hoặc các khu vực pháp lý khác mà luật bảo vệ dữ liệu có thể khác so với khu vực pháp lý của bạn.',
        'Sự đồng ý của bạn với Chính Sách Bảo Mật này sau khi bạn gửi thông tin đó thể hiện sự đồng ý của bạn với việc chuyển giao đó.',
        'Dịch vụ sẽ thực hiện mọi bước cần thiết để đảm bảo rằng dữ liệu của bạn được xử lý an toàn và phù hợp với Chính Sách Bảo Mật này và không có việc chuyển giao Dữ Liệu Cá Nhân của bạn sẽ diễn ra đối với một tổ chức hoặc một quốc gia trừ khi có các biện pháp kiểm soát thích hợp, bao gồm bảo mật dữ liệu của bạn và các thông tin cá nhân khác.',
      ],
    },
    {
      title: '',
      subTitle: 'Xóa Dữ Liệu Cá Nhân Của Bạn',
      type: '',
      content: [
        'Bạn có quyền xóa hoặc yêu cầu chúng tôi hỗ trợ xóa Dữ Liệu Cá Nhân mà chúng tôi đã thu thập về bạn.',
        'Dịch vụ của chúng tôi có thể cho phép bạn xóa một số thông tin nhất định về bạn từ trong Dịch vụ.',
        'Bạn có thể cập nhật, sửa đổi hoặc xóa thông tin của mình bất kỳ lúc nào bằng cách đăng nhập vào Tài khoản của mình, nếu bạn có tài khoản, và truy cập phần cài đặt tài khoản cho phép bạn quản lý thông tin cá nhân của mình. Bạn cũng có thể liên hệ với chúng tôi để yêu cầu truy cập, sửa đổi hoặc xóa bất kỳ thông tin cá nhân nào mà bạn đã cung cấp cho chúng tôi.',
        'Tuy nhiên, xin lưu ý rằng chúng tôi có thể cần giữ lại một số thông tin khi chúng tôi có nghĩa vụ pháp lý hoặc cơ sở hợp pháp để làm như vậy.',
      ],
    },
    {
      title: '',
      subTitle: 'Tiết Lộ Dữ Liệu Cá Nhân Của Bạn',
      type: 'Giao Dịch Kinh Doanh',
      content: [
        'Nếu Công ty tham gia vào một cuộc sáp nhập, mua lại hoặc bán tài sản, Dữ Liệu Cá Nhân của bạn có thể được chuyển giao. Chúng tôi sẽ thông báo cho bạn trước khi Dữ Liệu Cá Nhân của bạn được chuyển giao và trở thành đối tượng của một Chính Sách Bảo Mật khác.',
      ],
    },
    {
      title: '',
      subTitle: '',
      type: 'Thực Thi Pháp Luật',
      content: [
        'Trong một số trường hợp nhất định, Công ty có thể bị yêu cầu tiết lộ Dữ Liệu Cá Nhân của bạn nếu được yêu cầu làm như vậy theo luật hoặc để đáp ứng các yêu cầu hợp lệ từ các cơ quan công quyền (ví dụ: một tòa án hoặc cơ quan chính phủ).',
      ],
    },
    {
      title: '',
      subTitle: '',
      type: 'Các Yêu Cầu Pháp Lý Khác',
      content: [
        'Trong các trường hợp dịch vụ có thể tiết lộ Dữ Liệu Cá Nhân của bạn nếu cần thiết để:',
        '• Tuân thủ một nghĩa vụ pháp lý',
        '• Bảo vệ quyền lợi hoặc tài sản của Công ty',
        '• Ngăn chặn hoặc điều tra các hành vi sai trái có thể liên quan đến Dịch vụ',
        '• Bảo vệ sự an toàn cá nhân của Người dùng Dịch vụ hoặc công chúng',
        '• Bảo vệ chống lại trách nhiệm pháp lý',
      ],
    },
    {
      title: '',
      subTitle: 'Bảo Mật Dữ Liệu Cá Nhân Của Bạn',
      type: '',
      content: [
        'Sự an toàn Dữ Liệu Cá Nhân của bạn là quan trọng đối với chúng tôi, nhưng hãy nhớ rằng không có phương thức truyền tải nào qua Internet hoặc phương pháp lưu trữ điện tử là 100% bảo mật. Mặc dù chúng tôi cố gắng sử dụng các phương pháp chấp nhận được trong thương mại để bảo vệ dữ liệu cá nhân của bạn, nhưng chúng tôi không thể đảm bảo tính bảo mật tuyệt đối.',
      ],
    },
    {
      title: 'Liên kết đến các trang web khác',
      subTitle: '',
      type: '',
      content: [
        'Dịch vụ của chúng tôi có thể chứa các liên kết đến các trang web khác không được vận hành bởi chúng tôi. Nếu Bạn nhấp vào liên kết của bên thứ ba, Bạn sẽ được chuyển hướng đến trang web của bên thứ ba đó. Chúng tôi khuyến cáo Bạn nên xem xét Chính sách Bảo mật của mọi trang web mà Bạn truy cập.',
        'Chúng tôi không kiểm soát và không chịu trách nhiệm về nội dung, chính sách bảo mật của bất kỳ trang web hay dịch vụ nào của bên thứ ba.',
      ],
    },
    {
      title: 'Thay đổi của Chính sách Bảo mật này',
      subTitle: '',
      type: '',
      content: [
        'Chúng tôi có thể cập nhật Chính sách Bảo mật này theo thời gian. Chúng tôi sẽ thông báo cho Bạn về bất kỳ thay đổi nào bằng cách đăng Chính sách Bảo mật mới trên trang này.',
        'Chúng tôi sẽ thông báo cho Bạn qua email và/hoặc một thông báo nổi bật trên Dịch vụ của Chúng tôi, trước khi thay đổi có hiệu lực và cập nhật ngày "Cập nhật lần cuối" ở đầu Chính sách Bảo mật này.',
        'Bạn nên xem lại Chính sách Bảo mật này định kỳ để kiểm tra bất kỳ thay đổi nào. Những thay đổi đối với Chính sách Bảo mật này sẽ có hiệu lực khi chúng được đăng trên trang này.',
      ],
    },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.8' }}>
      <h1 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 'bold', marginBottom: '30px' }}>
        Các điều khoản và điều kiện của CakeHub
      </h1>
      {sections.map((section, index) => (
        <div key={index} style={{ marginBottom: '25px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', textTransform: 'uppercase', color: '#0A0A0A' }}>
            {section.title}
          </h2>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#161616' }}>{section.subTitle}</h2>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#161616' }}>{section.type}</h2>
          {section.content.map((paragraph, idx) => (
            <p key={idx} style={{ fontSize: '16px', marginBottom: '10px', color: '#1D1C1C' }}>
              {paragraph}
            </p>
          ))}
        </div>
      ))}
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', textTransform: 'uppercase', color: '#0A0A0A' }}>Contact Us</h2>
      <p style={{ fontSize: '16px', marginBottom: '10px' }}>
        Nếu có bất kì thắc mắc nào về chính sách bảo mật của chúng tôi, bạn có thể liên hệ:
      </p>
      <ul style={{ fontSize: '16px' }}>
        <li>Qua email: cakehub18@gmail.com</li>
      </ul>
    </div>
  );
};

export default TermsofService;
