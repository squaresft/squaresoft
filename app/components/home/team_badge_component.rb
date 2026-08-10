# frozen_string_literal: true

module Home
  class TeamBadgeComponent < ApplicationComponent
    with_collection_parameter :member

    def initialize(member:, member_counter: nil, index: nil)
      @member = member
      @index = index || (member_counter ? member_counter - 1 : 0)
    end

    attr_reader :member, :index

    def email
      "#{member["name"].parameterize(separator: ".")}@squaresoft.com.br"
    end

    def badge_id
      format("SS-%03d", index + 1)
    end

    def initials
      member["name"].split.map { |part| part[0] }.join
    end

    def external_linkedin?
      member["linkedin"] != "#"
    end
  end
end
