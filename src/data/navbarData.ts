const navbarData = {
  navBarItems: [
    {
      id: '-1',
      title: 'dashboard',
      img:
        'https://image.similarpng.com/very-thumbnail/2021/01/Location-icon-design-on-transparent-background-PNG.png',
      disabled: true,
      level: 0,
    },
    {
      id: '0',
      title: 'students',
      to: '/students',
      img:
        'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg',
      imgSelected:
        'https://image.similarpng.com/very-thumbnail/2021/01/Location-icon-design-on-transparent-background-PNG.png',
      menu: [
        {
          id: '00',
          title: 'All Students',
          to: 'students/all',
          level: 1,
          menu: [
            {
              id: '000',
              title: 'Fees',
              to: 'students/all/fees',
              level: 2,
            },
            {
              id: '001',
              title: 'Admission',
              to: '/admission',
              level: 2,
            },
          ],
        },
        {
          id: '01',
          title: 'Fees',
          to: 'students/fees',
          img:
            'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg',
          level: 1,
          onClick: id => {
            console.log('id', id);
          },
        },
        {
          id: '02',
          title: 'Admission',
          to: '/admission',
          img:
            'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg',
          level: 1,
        },
        {
          id: '03',
          title: 'Assignments',
          to: '/assignments',
          img:
            'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg',
          level: 1,
        },
        {
          id: '04',
          title: 'Reports',
          to: '/reports',
          img:
            'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg',
          level: 1,
        },
      ],
      level: 0,
    },
    {
      id: '1',
      title: 'staff',
      img:
        'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg',
      imgSelected:
        'https://image.similarpng.com/very-thumbnail/2021/01/Location-icon-design-on-transparent-background-PNG.png',
      menu: [
        {
          title: 'Create',
          to: '/createStudent',
          img:
            'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg',
          level: 1,
        },
        {
          title: 'Create',
          to: '/createStudent',
          img:
            'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg',
          level: 1,
        },
        {
          title: 'Create',
          to: '/createStudent',
          img:
            'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg',
          level: 1,
        },
      ],
      level: 0,
    },
    {
      id: '2',
      title: 'departments',
      img:
        'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg',
      imgSelected:
        'https://image.similarpng.com/very-thumbnail/2021/01/Location-icon-design-on-transparent-background-PNG.png',
      menu: [
        {
          title: 'Create',
          to: '/createStudent',
          img:
            'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg',
          level: 1,
        },
        {
          title: 'Create',
          to: '/createStudent',
          img:
            'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg',
          level: 1,
        },
        {
          title: 'Create',
          to: '/createStudent',
          img:
            'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg',
          level: 1,
        },
      ],
      level: 0,
    },
    {
      id: '3',
      title: 'library',
      img:
        'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg',
      imgSelected:
        'https://image.similarpng.com/very-thumbnail/2021/01/Location-icon-design-on-transparent-background-PNG.png',
      menu: [
        {
          title: 'Create',
          to: '/createStudent',
          img:
            'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg',
          level: 1,
        },
        {
          title: 'Create',
          to: '/createStudent',
          img:
            'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg',
          level: 1,
        },
        {
          title: 'Create',
          to: '/createStudent',
          img:
            'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg',
          level: 1,
        },
      ],
      level: 0,
    },
    {
      id: '4',
      title: 'hostels',
      img:
        'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg',
      imgSelected:
        'https://image.similarpng.com/very-thumbnail/2021/01/Location-icon-design-on-transparent-background-PNG.png',
      menu: [
        {
          title: 'Create',
          to: '/createStudent',
          img:
            'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg',
          level: 1,
        },
        {
          title: 'Create',
          to: '/createStudent',
          img:
            'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg',
          level: 1,
        },
        {
          title: 'Create',
          to: '/createStudent',
          img:
            'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg',
          level: 1,
        },
      ],
      level: 0,
    },
    {
      id: '5',
      title: 'accounting',
      to: '/accounting',
      img:
        'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg',
      imgSelected:
        'https://image.similarpng.com/very-thumbnail/2021/01/Location-icon-design-on-transparent-background-PNG.png',
      menu: [
        {
          title: 'Create',
          to: '/accounting/createStudent',
          img:
            'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg',
          level: 1,
          menu: [
            {
              title: 'Create',
              to: '/accounting/createStudent/create',
              img:
                'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg',
              level: 1,
            },
            {
              title: 'Create',
              to: '/createStudent',
              img:
                'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg',
              level: 1,
            },
          ],
        },
        {
          title: 'Create',
          to: '/createStudent',
          img:
            'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg',
          level: 1,
        },
        {
          title: 'Create',
          to: '/createStudent',
          img:
            'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg',
          level: 1,
        },
      ],
      level: 0,
    },
  ],
  location: '/accounting/createStudent/create',
};

export { navbarData };
