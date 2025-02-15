{/* Upcoming Festivals & Events Section */}
<div className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-end mb-12">
      <div className="relative">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Upcoming Festivals & Events
          <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full"></div>
        </h2>
        <p className="text-lg text-gray-600">Experience the vibrant cultural celebrations across Arunachal Pradesh</p>
      </div>
      <div className="flex gap-4">
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors border">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors border">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          month: 'January',
          events: [
            {
              name: 'Si Donyi Hilo',
              tribe: 'Tagin',
              district: 'Upper Subansiri',
              date: 'Sunday, 5th January - Monday, 6th January'
            },
            {
              name: 'Tongya Festival',
              tribe: 'Monpa',
              district: 'Tawang',
              date: 'Thursday, 9th January'
            },
            {
              name: 'Sarok',
              tribe: 'Aka',
              district: 'Bichom',
              date: 'Saturday, 11th January'
            }
          ]
        },
        {
          month: 'February',
          events: [
            {
              name: 'Reh',
              tribe: 'Idu Mishmi',
              district: 'Lower Dibang Valley, DibangValley, Lohit, Upper Siang, East Siang',
              date: 'Saturday, 1st February'
            },
            {
              name: 'Donyi Mari',
              tribe: 'Galo',
              district: 'Leparda Lower Siang, West Siang',
              date: 'Wednesday, 5th February'
            },
            {
              name: 'Lhachhuth',
              tribe: 'Meyor',
              district: 'Anjaw',
              date: 'Wednesday, 5th February'
            }
          ]
        },
        {
          month: 'March',
          events: [
            {
              name: 'Losar',
              tribe: 'Monpa, Shendukpen, Memba, Khamba & Meyor',
              district: 'Tawang, West Kameng, Upper Siang & Anjaw',
              date: 'February March - March'
            },
            {
              name: 'Unying Aran Gidi',
              tribe: 'Adi',
              district: 'Siang, Upper Siang, East Siang, Lower Dibang Valley',
              date: 'Friday, 7th March'
            }
          ]
        },
        {
          month: 'April',
          events: [
            {
              name: 'Mopin',
              tribe: 'Galo',
              district: 'Leparda Lower Siang, West Siang',
              date: 'Saturday, 5th April - Tuesday, 8th April'
            },
            {
              name: 'Poogtukuth',
              tribe: 'Tutsa',
              district: 'Changlang & Tirap',
              date: 'Friday, 11th April'
            },
            {
              name: 'Sangken',
              tribe: 'Tai Khamti',
              district: 'Namsai',
              date: 'Monday, 14th April'
            }
          ]
        }
      ].map((month) => (
        <div key={month.month} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-4">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              {month.month}
            </h3>
          </div>
          <div className="divide-y divide-gray-100">
            {month.events.map((event) => (
              <div key={event.name} className="p-4 hover:bg-gray-50 transition-colors">
                <h4 className="font-semibold text-blue-600 mb-1">{event.name}</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                    Tribe: {event.tribe}
                  </p>
                  <p className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    {event.district}
                  </p>
                  <div className="mt-3 px-3 py-2 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-teal-100">
                    <p className="text-sm font-medium text-green-800 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-green-600" />
                      {event.date}
                    </p>
                  </div>
                </div>
                <button className="mt-3 text-xs font-medium text-teal-600 hover:text-teal-700 transition-colors flex items-center gap-1">
                  View Details
                  <ChevronRight className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>